'use client';

import { useState, useTransition } from 'react';
import { Trash2 } from 'lucide-react';
import { deleteUserById } from '@/app/admin/actions';
import { useToast } from './Toast';

export default function DeleteUserButton({ id, name, self }: { id: number; name: string; self: boolean }) {
  const [confirming, setConfirming] = useState(false);
  const [, startTransition] = useTransition();
  const { toast } = useToast();

  if (self) {
    return <span style={{ fontSize: 12, color: 'var(--a-muted)' }}>You</span>;
  }

  return (
    <>
      <button type="button" className="btn-admin btn-admin--danger" onClick={() => setConfirming(true)} aria-label="Delete user">
        <Trash2 size={14} />
      </button>
      {confirming && (
        <div className="modal-overlay" onClick={() => setConfirming(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal__icon"><Trash2 size={22} /></div>
            <h3>Remove {name}?</h3>
            <p>They will lose access to the content manager immediately.</p>
            <div className="modal__actions">
              <button className="btn-admin btn-admin--ghost" onClick={() => setConfirming(false)}>Cancel</button>
              <button
                className="btn-admin btn-admin--solid-danger"
                onClick={() => {
                  setConfirming(false);
                  startTransition(async () => {
                    await deleteUserById(id);
                    toast('User removed');
                  });
                }}
              >
                <Trash2 size={15} /> Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
