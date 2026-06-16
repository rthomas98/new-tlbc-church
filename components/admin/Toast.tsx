'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

type ToastKind = 'success' | 'error' | 'info';
type Toast = { id: number; message: string; kind: ToastKind };

type ToastCtx = { toast: (message: string, kind?: ToastKind) => void };

const Ctx = createContext<ToastCtx | null>(null);

export function useToast() {
  const ctx = useContext(Ctx);
  if (!ctx) return { toast: () => {} };
  return ctx;
}

let counter = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, kind: ToastKind = 'success') => {
    const id = ++counter;
    setToasts((t) => [...t, { id, message, kind }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  }, []);

  return (
    <Ctx.Provider value={{ toast }}>
      {children}
      <div className="toast-stack" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast--${t.kind}`}>
            <span className="toast__icon">{t.kind === 'error' ? '✕' : t.kind === 'info' ? 'ℹ' : '✓'}</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}

// Reads a ?flash= param once on mount and fires a toast (used after server-action redirects).
export function FlashToast({ flash }: { flash?: string }) {
  const { toast } = useToast();
  useEffect(() => {
    if (!flash) return;
    const messages: Record<string, [string, ToastKind]> = {
      saved: ['Changes saved', 'success'],
      created: ['Created successfully', 'success'],
      deleted: ['Item deleted', 'success'],
    };
    const [msg, kind] = messages[flash] ?? [flash, 'info'];
    toast(msg, kind);
    // Clean the URL so a refresh doesn't re-toast.
    const url = new URL(window.location.href);
    url.searchParams.delete('flash');
    window.history.replaceState({}, '', url.toString());
  }, [flash, toast]);
  return null;
}
