import PocketBase, { ClientResponseError } from 'pocketbase';
import type { FeedbackSubmission, LeadSubmission } from '../types';

export const POCKETBASE_URL =
  import.meta.env.VITE_POCKETBASE_URL || 'https://pb.demo.vision-it-systems.de';

export const pb = new PocketBase(POCKETBASE_URL);

// Disable auto-cancellation so parallel UI requests never abort each other
pb.autoCancellation(false);

export interface PocketBaseResult<T = unknown> {
  ok: boolean;
  data?: T;
  errorType?: 'unreachable' | 'validation' | 'unknown';
  errorMessage?: string;
}

function classifyPocketBaseError(err: unknown): Pick<PocketBaseResult, 'errorType' | 'errorMessage'> {
  if (err instanceof ClientResponseError) {
    if (err.status === 0 || err.isAbort) {
      return {
        errorType: 'unreachable',
        errorMessage: `PocketBase endpoint (${POCKETBASE_URL}) is currently unreachable or blocked by network/CORS.`,
      };
    }
    if (err.status >= 400 && err.status < 500) {
      return {
        errorType: 'validation',
        errorMessage: err.message || 'Validation error while saving record.',
      };
    }
    return {
      errorType: 'unknown',
      errorMessage: err.message || `Server error (${err.status}).`,
    };
  }

  return {
    errorType: 'unreachable',
    errorMessage:
      err instanceof Error
        ? err.message
        : `Unable to reach PocketBase server at ${POCKETBASE_URL}.`,
  };
}

export async function submitDemoLead(payload: LeadSubmission): Promise<PocketBaseResult> {
  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);

    const record = await pb.collection('demo_leads').create(
      {
        name: payload.name.trim(),
        email: payload.email.trim(),
        company: payload.company.trim(),
        services: payload.services,
        notes: payload.notes?.trim() || '',
        language: payload.language,
        source_module: payload.sourceModule || 'section',
        submitted_at: new Date().toISOString(),
      },
      { signal: controller.signal }
    );

    window.clearTimeout(timeout);
    return { ok: true, data: record };
  } catch (err) {
    return {
      ok: false,
      ...classifyPocketBaseError(err),
    };
  }
}

export async function submitDemoFeedback(payload: FeedbackSubmission): Promise<PocketBaseResult> {
  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);

    const record = await pb.collection('demo_feedback').create(
      {
        module: payload.module,
        rating: payload.rating,
        comment: payload.comment?.trim() || '',
        language: payload.language,
        submitted_at: new Date().toISOString(),
      },
      { signal: controller.signal }
    );

    window.clearTimeout(timeout);
    return { ok: true, data: record };
  } catch (err) {
    return {
      ok: false,
      ...classifyPocketBaseError(err),
    };
  }
}
