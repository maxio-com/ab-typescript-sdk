/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface DunningStepData {
  dayThreshold: number;
  action: string;
  emailBody?: string | null;
  emailSubject?: string | null;
  sendEmail: boolean;
  sendBccEmail: boolean;
  sendSms: boolean;
  smsBody?: string | null;
}

export const dunningStepDataSchema: Schema<DunningStepData> = object({
  dayThreshold: ['day_threshold', number()],
  action: ['action', string()],
  emailBody: ['email_body', optional(nullable(string()))],
  emailSubject: ['email_subject', optional(nullable(string()))],
  sendEmail: ['send_email', boolean()],
  sendBccEmail: ['send_bcc_email', boolean()],
  sendSms: ['send_sms', boolean()],
  smsBody: ['sms_body', optional(nullable(string()))],
});
