import { Check, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Translations } from '../i18n/translations';
import { submitDemoFeedback } from '../lib/pocketbase';
import type { DemoModuleId, Language } from '../types';

interface FeedbackBarProps {
  activeModule: DemoModuleId;
  lang: Language;
  t: Translations['feedback'];
  toastCopy: Translations['toasts'];
  onNotify: (type: 'success' | 'error' | 'info', title: string, description: string) => void;
}

export function FeedbackBar({
  activeModule,
  lang,
  t,
  toastCopy,
  onNotify,
}: FeedbackBarProps) {
  const [rating, setRating] = useState<number>(0);
  const [hovered, setHovered] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedModules, setSubmittedModules] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setRating(0);
    setHovered(0);
    setComment('');
  }, [activeModule]);

  const isDoneForModule = Boolean(submittedModules[activeModule]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || submitting) return;

    setSubmitting(true);
    const res = await submitDemoFeedback({
      module: activeModule,
      rating,
      comment,
      language: lang,
    });
    setSubmitting(false);

    if (res.ok) {
      setSubmittedModules((prev) => ({ ...prev, [activeModule]: true }));
      onNotify('success', toastCopy.feedbackSuccessTitle, toastCopy.feedbackSuccessDesc);
    } else {
      onNotify(
        'error',
        toastCopy.feedbackErrorTitle,
        res.errorMessage || toastCopy.feedbackErrorDesc
      );
    }
  };

  return (
    <div className="mt-6 border-t border-white/[0.08] pt-5">
      {isDoneForModule ? (
        <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">
          <Check className="h-4 w-4 shrink-0" />
          <span>{t.thanks}</span>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-medium text-slate-300">{t.prompt}</span>
            <div className="flex items-center gap-1" role="radiogroup" aria-label={t.prompt}>
              {[1, 2, 3, 4, 5].map((star) => {
                const active = (hovered || rating) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    aria-label={`${star} / 5`}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => setRating(star)}
                    className="rounded p-1 transition-transform hover:scale-110 cursor-pointer"
                  >
                    <Star
                      className={`h-4 w-4 ${
                        active
                          ? 'fill-cyan-400 text-cyan-400'
                          : 'text-slate-600 hover:text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center lg:max-w-lg">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 rounded-lg border border-white/[0.1] bg-[#090d16] px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={rating === 0 || submitting}
              className="rounded-lg border border-cyan-400/40 bg-cyan-500/15 px-3.5 py-1.5 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-500/25 disabled:opacity-40 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {submitting ? t.submitting : t.submit}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
