'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { UploadCloud, ImageOff, RefreshCw, Settings2 } from 'lucide-react';
import { saveResource, uploadImage } from '@/app/admin/actions';
import { PHOTO_KEYS, type Field, type ResourceKey } from '@/lib/admin/fields';
import RichTextEditor from './RichTextEditor';
import { StringListField, ObjectListField, GroupField } from './RepeaterFields';

type Props = {
  resource: ResourceKey;
  fields: Field[];
  values: Record<string, unknown>;
  id?: number;
};

export default function AdminForm({ resource, fields, values, id }: Props) {
  return (
    <form action={saveResource} className="form-grid">
      <input type="hidden" name="__resource" value={resource} />
      {id != null && <input type="hidden" name="__id" value={id} />}

      {fields.map((field) => (
        <FieldInput key={field.name} field={field} value={values[field.name]} />
      ))}

      <div className="form-actions">
        <button type="submit" className="btn-admin btn-admin--primary">
          Save
        </button>
        <Link href={`/admin/${resource}`} className="btn-admin btn-admin--ghost">
          Cancel
        </Link>
      </div>
    </form>
  );
}

function FieldInput({ field, value }: { field: Field; value: unknown }) {
  if (field.type === 'checkbox') {
    return (
      <div className="field field--check">
        <input
          id={field.name}
          name={field.name}
          type="checkbox"
          defaultChecked={Boolean(value)}
        />
        <label htmlFor={field.name}>{field.label}</label>
      </div>
    );
  }

  if (field.type === 'stringList') {
    return (
      <StringListField
        name={field.name}
        label={field.label}
        help={field.help}
        value={Array.isArray(value) ? (value as string[]) : []}
      />
    );
  }

  if (field.type === 'objectList') {
    return (
      <ObjectListField
        name={field.name}
        label={field.label}
        help={field.help}
        itemFields={field.itemFields ?? []}
        value={Array.isArray(value) ? (value as Record<string, string>[]) : []}
      />
    );
  }

  if (field.type === 'group') {
    return (
      <GroupField
        name={field.name}
        label={field.label}
        subFields={field.subFields ?? []}
        value={(value && typeof value === 'object' ? value : {}) as Record<string, string>}
      />
    );
  }

  if (field.type === 'richtext') {
    return (
      <div className="field field--full">
        <label>{field.label}</label>
        <RichTextEditor name={field.name} defaultValue={String(value ?? '')} />
        {field.help && <div className="help">{field.help}</div>}
      </div>
    );
  }

  if (field.type === 'textarea') {
    return (
      <div className="field field--full">
        <label htmlFor={field.name}>{field.label}</label>
        <textarea id={field.name} name={field.name} defaultValue={String(value ?? '')} required={field.required} />
        {field.help && <div className="help">{field.help}</div>}
      </div>
    );
  }

  if (field.type === 'number') {
    return (
      <div className="field">
        <label htmlFor={field.name}>{field.label}</label>
        <input id={field.name} name={field.name} type="number" defaultValue={Number(value ?? 0)} />
        {field.help && <div className="help">{field.help}</div>}
      </div>
    );
  }

  if (field.type === 'date') {
    // A DB timestamp arrives as a Date or ISO string; an <input type="date">
    // needs a plain YYYY-MM-DD value.
    const iso = value ? new Date(value as string | number | Date).toISOString().slice(0, 10) : '';
    return (
      <div className="field">
        <label htmlFor={field.name}>{field.label}</label>
        <input id={field.name} name={field.name} type="date" defaultValue={iso} />
        {field.help && <div className="help">{field.help}</div>}
      </div>
    );
  }

  if (field.type === 'select') {
    return (
      <div className="field">
        <label htmlFor={field.name}>{field.label}</label>
        <select id={field.name} name={field.name} defaultValue={String(value ?? field.options?.[0]?.value ?? '')}>
          {field.options?.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        {field.help && <div className="help">{field.help}</div>}
      </div>
    );
  }

  if (field.type === 'photo') {
    return <PhotoField field={field} value={String(value ?? '')} />;
  }

  return (
    <div className="field">
      <label htmlFor={field.name}>{field.label}</label>
      <input id={field.name} name={field.name} type="text" defaultValue={String(value ?? '')} required={field.required} />
      {field.help && <div className="help">{field.help}</div>}
    </div>
  );
}

function PhotoField({ field, value }: { field: Field; value: string }) {
  const [current, setCurrent] = useState(value);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const isPath = current.startsWith('/') || current.startsWith('http');
  const previewSrc = isPath ? current : current ? `/uploads/generated/${current}.png` : '';

  async function uploadFile(file: File | undefined) {
    if (!file) return;
    setBusy(true);
    setError('');
    const fd = new FormData();
    fd.append('file', file);
    const res = await uploadImage(fd);
    setBusy(false);
    if ('url' in res) setCurrent(res.url);
    else setError(res.error);
  }

  return (
    <div className="field field--full">
      <label>{field.label}</label>

      {/* Hidden input carries the stored value (path or built-in key). */}
      <input type="hidden" name={field.name} value={current} />

      {current ? (
        <div className="photo-set">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={previewSrc} alt="preview" onError={(e) => ((e.target as HTMLImageElement).style.opacity = '0.15')} />
          <div className="photo-set__meta">
            <span className="photo-set__name">{current}</span>
            <div className="photo-set__actions">
              <button type="button" className="btn-admin btn-admin--ghost" onClick={() => fileRef.current?.click()} disabled={busy}>
                <RefreshCw size={14} /> {busy ? 'Uploading…' : 'Replace'}
              </button>
              <button type="button" className="btn-admin btn-admin--danger" onClick={() => setCurrent('')}>
                <ImageOff size={14} /> Remove
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`photo-drop${dragOver ? ' dragover' : ''}`}
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); uploadFile(e.dataTransfer.files?.[0]); }}
        >
          <UploadCloud size={26} />
          <strong>{busy ? 'Uploading…' : 'Click or drag an image to upload'}</strong>
          <span>PNG, JPG, WebP or GIF · up to 8 MB</span>
        </div>
      )}

      <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => uploadFile(e.target.files?.[0])} />
      {error && <div className="help" style={{ color: 'var(--a-red)' }}>{error}</div>}

      <button type="button" className="photo-advanced-toggle" onClick={() => setShowAdvanced((v) => !v)}>
        <Settings2 size={13} /> {showAdvanced ? 'Hide' : 'Use a built-in image or paste a path'}
      </button>
      {showAdvanced && (
        <div style={{ marginTop: 8 }}>
          <input
            type="text"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            placeholder="Built-in key or /path/to/image.jpg"
          />
          <div className="help">Built-in keys: {PHOTO_KEYS.slice(0, 6).join(', ')}…</div>
        </div>
      )}
    </div>
  );
}
