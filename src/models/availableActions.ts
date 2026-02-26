/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { SendEmail, sendEmailSchema } from './sendEmail.js';

export interface AvailableActions {
  sendEmail?: SendEmail;
  [key: string]: unknown;
}

export const availableActionsSchema: Schema<AvailableActions> = lazy(() =>
  expandoObject({ sendEmail: ['send_email', optional(sendEmailSchema)] })
);
