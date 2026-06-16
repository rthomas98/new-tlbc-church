'use client';

import { useEffect, useRef, useState } from 'react';
import { Upload, Copy, Check, ImageIcon } from 'lucide-react';
import { uploadImage, listMedia } from '@/app/admin/actions';
import { useToast } from './Toast';

export default function MediaLibrary() {
  const [items, setItems] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  async function refresh() {
    setItems(await listMedia());
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    const fd = new FormData();
    fd.append('file', file);
    const res = await uploadImage(fd);
    setBusy(false);
    if ('error' in res) {
      toast(res.error, 'error');
    } else {
      toast('Image uploaded');
      await refresh();
    }
    if (fileRef.current) fileRef.current.value = '';
  }

  function copy(url: string) {
    navigator.clipboard.writeText(url);
    setCopied(url);
    toast('Path copied');
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <>
      <div className="media-upload" onClick={() => fileRef.current?.click()}>
        <Upload size={22} />
        <div>
          <strong>{busy ? 'Uploading…' : 'Upload an image'}</strong>
          <span>PNG, JPG, WebP or GIF · up to 8 MB</span>
        </div>
        <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} hidden disabled={busy} />
      </div>

      {items.length === 0 ? (
        <div className="admin-card" style={{ marginTop: 22 }}>
          <div className="empty-state">
            <ImageIcon size={26} style={{ opacity: 0.4 }} />
            <p style={{ marginTop: 10 }}>No uploads yet. Add your first image above.</p>
          </div>
        </div>
      ) : (
        <div className="media-grid">
          {items.map((url) => (
            <div key={url} className="media-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" />
              <button className="media-copy" onClick={() => copy(url)} title="Copy path">
                {copied === url ? <Check size={14} /> : <Copy size={14} />}
                {copied === url ? 'Copied' : 'Copy path'}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
