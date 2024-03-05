/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

export interface AutoResume {
  automaticallyResumeAt?: string | null;
  [key: string]: unknown;
}

export const autoResumeSchema: Schema<AutoResume> = expandoObject({
  automaticallyResumeAt: [
    'automatically_resume_at',
    optional(nullable(string())),
  ],
});
