import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';
import type { ToastItem } from '../types';

interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col gap-2.5 px-4 sm:px-0"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            role="status"
            className={`flex items-start gap-3 rounded-xl border p-4 shadow-xl backdrop-blur-md transition-all ${
              isSuccess
                ? 'border-emerald-500/30 bg-[#0d1c1b]/95 text-slate-100'
                : isError
                ? 'border-rose-500/35 bg-[#1e1016]/95 text-slate-100'
                : 'border-cyan-500/30 bg-[#0f1623]/95 text-slate-100'
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
            ) : isError ? (
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
            ) : (
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
            )}
            <div className="flex-1 text-sm">
              <p className="font-semibold text-white">{toast.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-300">
                {toast.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              aria-label="Close notification"
              className="rounded p-1 text-slate-400 hover:bg-white/10 hover:text-white cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
