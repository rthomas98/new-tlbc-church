'use client';

import { useMemo, useState, useTransition } from 'react';
import Link from 'next/link';
import { Search, Trash2, GripVertical, Pencil } from 'lucide-react';
import {
  togglePublished,
  reorderResource,
  deleteResourceById,
} from '@/app/admin/actions';
import { useToast } from './Toast';
import type { ResourceKey } from '@/lib/admin/fields';

type Row = Record<string, unknown> & { id: number };

type Props = {
  resource: ResourceKey;
  columns: string[];
  rows: Row[];
  singular: string;
};

export default function ResourceTable({ resource, columns, rows, singular }: Props) {
  const [items, setItems] = useState<Row[]>(rows);
  const [query, setQuery] = useState('');
  const [dragId, setDragId] = useState<number | null>(null);
  const [pendingDelete, setPendingDelete] = useState<Row | null>(null);
  const [, startTransition] = useTransition();
  const { toast } = useToast();

  const hasPublished = columns.includes('published');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((row) =>
      columns.some((c) => String(row[c] ?? '').toLowerCase().includes(q)),
    );
  }, [items, query, columns]);

  const dragEnabled = !query; // reordering only makes sense in the unfiltered view

  function onDrop(targetId: number) {
    if (dragId == null || dragId === targetId) return;
    const next = [...items];
    const from = next.findIndex((r) => r.id === dragId);
    const to = next.findIndex((r) => r.id === targetId);
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    setItems(next);
    setDragId(null);
    startTransition(async () => {
      await reorderResource(resource, next.map((r) => r.id));
      toast('Order updated');
    });
  }

  function onTogglePublished(row: Row) {
    const next = !row.published;
    setItems((prev) => prev.map((r) => (r.id === row.id ? { ...r, published: next } : r)));
    startTransition(async () => {
      await togglePublished(resource, row.id, next);
      toast(next ? 'Published' : 'Moved to draft');
    });
  }

  function confirmDelete() {
    if (!pendingDelete) return;
    const row = pendingDelete;
    setItems((prev) => prev.filter((r) => r.id !== row.id));
    setPendingDelete(null);
    startTransition(async () => {
      await deleteResourceById(resource, row.id);
      toast(`${singular} deleted`);
    });
  }

  return (
    <>
      <div className="table-toolbar">
        <div className="table-search">
          <Search size={16} />
          <input
            type="text"
            placeholder={`Search ${singular.toLowerCase()}s…`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <span className="table-count">{filtered.length} shown</span>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{ width: 36 }}></th>
              {columns.map((col) => (
                <th key={col}>{col === 'groupName' ? 'group' : col}</th>
              ))}
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length + 2}>
                  <div className="empty-state">
                    {query ? `No matches for “${query}”.` : `No items yet — click “New ${singular}”.`}
                  </div>
                </td>
              </tr>
            )}
            {filtered.map((row) => (
              <tr
                key={row.id}
                draggable={dragEnabled}
                onDragStart={() => setDragId(row.id)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => onDrop(row.id)}
                className={dragId === row.id ? 'row-dragging' : undefined}
              >
                <td className="drag-handle" title={dragEnabled ? 'Drag to reorder' : 'Clear search to reorder'}>
                  <GripVertical size={15} style={{ opacity: dragEnabled ? 0.5 : 0.18 }} />
                </td>
                {columns.map((col, ci) => (
                  <td key={col} className={ci === 0 ? 'cell-title' : undefined}>
                    {col === 'published' ? (
                      <button
                        type="button"
                        onClick={() => onTogglePublished(row)}
                        className={`pub-toggle ${row.published ? 'on' : 'off'}`}
                        aria-label={row.published ? 'Unpublish' : 'Publish'}
                      >
                        <span className="pub-dot" />
                        {row.published ? 'Published' : 'Draft'}
                      </button>
                    ) : (
                      String(row[col] ?? '—')
                    )}
                  </td>
                ))}
                <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                  <span className="row-actions">
                    <Link href={`/admin/${resource}/${row.id}`} className="link-edit">
                      <Pencil size={13} /> Edit
                    </Link>
                    <button
                      type="button"
                      className="btn-admin btn-admin--danger"
                      onClick={() => setPendingDelete(row)}
                      aria-label="Delete"
                    >
                      <Trash2 size={14} />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pendingDelete && (
        <div className="modal-overlay" onClick={() => setPendingDelete(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal__icon"><Trash2 size={22} /></div>
            <h3>Delete this {singular.toLowerCase()}?</h3>
            <p>
              “{String(pendingDelete[columns[0]] ?? 'This item')}” will be permanently removed
              from the website. This can’t be undone.
            </p>
            <div className="modal__actions">
              <button className="btn-admin btn-admin--ghost" onClick={() => setPendingDelete(null)}>
                Cancel
              </button>
              <button className="btn-admin btn-admin--solid-danger" onClick={confirmDelete}>
                <Trash2 size={15} /> Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {!hasPublished && null}
    </>
  );
}
