import React, { useEffect } from 'react';
import { CheckCircle2, Copy, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  type: 'link' | 'text' | 'success';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({
  toast,
  onDismiss,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <div className="pointer-events-auto flex items-start justify-between gap-3 p-3.5 bg-slate-900/95 border border-emerald-500/50 rounded-lg shadow-xl shadow-black/60 backdrop-blur-md animate-in slide-in-from-bottom-2 duration-200">
      <div className="flex items-start gap-2.5">
        <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 mt-0.5">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div>
          <h5 className="text-xs font-bold text-slate-100">{toast.title}</h5>
          <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-2 font-mono">
            {toast.description}
          </p>
        </div>
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="text-slate-400 hover:text-white p-1 rounded"
        aria-label="Dismiss toast"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
