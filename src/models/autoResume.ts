/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface AutoResume {
  automaticallyResumeAt?: string;
}

export const autoResumeSchema: Schema<AutoResume> = object({
  automaticallyResumeAt: ['automatically_resume_at', optional(string())],
});
