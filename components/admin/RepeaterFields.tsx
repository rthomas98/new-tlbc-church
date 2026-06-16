'use client';

import { useState } from 'react';
import { Plus, X, ArrowUp, ArrowDown } from 'lucide-react';
import type { SubField } from '@/lib/admin/fields';

// ---------- List of plain strings (e.g. description paragraphs) ----------
export function StringListField({
  name,
  label,
  help,
  value,
}: {
  name: string;
  label: string;
  help?: string;
  value: string[];
}) {
  const [items, setItems] = useState<string[]>(value.length ? value : ['']);

  const update = (i: number, v: string) => setItems((p) => p.map((x, j) => (j === i ? v : x)));
  const add = () => setItems((p) => [...p, '']);
  const remove = (i: number) => setItems((p) => p.filter((_, j) => j !== i));
  const move = (i: number, dir: -1 | 1) =>
    setItems((p) => {
      const next = [...p];
      const t = i + dir;
      if (t < 0 || t >= next.length) return p;
      [next[i], next[t]] = [next[t], next[i]];
      return next;
    });

  return (
    <div className="field field--full">
      <label>{label}</label>
      <div className="repeater">
        {items.map((item, i) => (
          <div key={i} className="repeater-row">
            <textarea value={item} onChange={(e) => update(i, e.target.value)} rows={2} />
            <div className="repeater-controls">
              <button type="button" onClick={() => move(i, -1)} disabled={i === 0} title="Move up"><ArrowUp size={14} /></button>
              <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1} title="Move down"><ArrowDown size={14} /></button>
              <button type="button" onClick={() => remove(i)} className="repeater-remove" title="Remove"><X size={14} /></button>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="repeater-add" onClick={add}><Plus size={15} /> Add paragraph</button>
      {help && <div className="help">{help}</div>}
      <input type="hidden" name={name} value={JSON.stringify(items.filter((x) => x.trim() !== ''))} />
    </div>
  );
}

// ---------- List of objects with defined subfields (e.g. expectations) ----------
export function ObjectListField({
  name,
  label,
  help,
  itemFields,
  value,
}: {
  name: string;
  label: string;
  help?: string;
  itemFields: SubField[];
  value: Record<string, string>[];
}) {
  const blank = () => Object.fromEntries(itemFields.map((f) => [f.name, ''])) as Record<string, string>;
  const [items, setItems] = useState<Record<string, string>[]>(value.length ? value : [blank()]);

  const update = (i: number, key: string, v: string) =>
    setItems((p) => p.map((row, j) => (j === i ? { ...row, [key]: v } : row)));
  const add = () => setItems((p) => [...p, blank()]);
  const remove = (i: number) => setItems((p) => p.filter((_, j) => j !== i));
  const move = (i: number, dir: -1 | 1) =>
    setItems((p) => {
      const next = [...p];
      const t = i + dir;
      if (t < 0 || t >= next.length) return p;
      [next[i], next[t]] = [next[t], next[i]];
      return next;
    });

  return (
    <div className="field field--full">
      <label>{label}</label>
      <div className="repeater">
        {items.map((row, i) => (
          <div key={i} className="repeater-card">
            <div className="repeater-card__head">
              <span>#{i + 1}</span>
              <div className="repeater-controls">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} title="Move up"><ArrowUp size={14} /></button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1} title="Move down"><ArrowDown size={14} /></button>
                <button type="button" onClick={() => remove(i)} className="repeater-remove" title="Remove"><X size={14} /></button>
              </div>
            </div>
            {itemFields.map((f) => (
              <div key={f.name} className="field" style={{ marginTop: 10 }}>
                <label>{f.label}</label>
                {f.type === 'textarea' ? (
                  <textarea value={row[f.name] ?? ''} onChange={(e) => update(i, f.name, e.target.value)} rows={2} />
                ) : (
                  <input type="text" value={row[f.name] ?? ''} onChange={(e) => update(i, f.name, e.target.value)} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button type="button" className="repeater-add" onClick={add}><Plus size={15} /> Add item</button>
      {help && <div className="help">{help}</div>}
      <input type="hidden" name={name} value={JSON.stringify(items)} />
    </div>
  );
}

// ---------- Single nested object (e.g. scripture quote + reference) ----------
export function GroupField({
  name,
  label,
  subFields,
  value,
}: {
  name: string;
  label: string;
  subFields: SubField[];
  value: Record<string, string>;
}) {
  const [obj, setObj] = useState<Record<string, string>>(value ?? {});
  const update = (key: string, v: string) => setObj((p) => ({ ...p, [key]: v }));

  return (
    <div className="field field--full">
      <label>{label}</label>
      <div className="repeater-card">
        {subFields.map((f) => (
          <div key={f.name} className="field" style={{ marginTop: f.name === subFields[0].name ? 0 : 10 }}>
            <label>{f.label}</label>
            {f.type === 'textarea' ? (
              <textarea value={obj[f.name] ?? ''} onChange={(e) => update(f.name, e.target.value)} rows={2} />
            ) : (
              <input type="text" value={obj[f.name] ?? ''} onChange={(e) => update(f.name, e.target.value)} />
            )}
          </div>
        ))}
      </div>
      <input type="hidden" name={name} value={JSON.stringify(obj)} />
    </div>
  );
}
