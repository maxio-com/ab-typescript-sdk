/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, Schema, string } from '../schema.js';

export interface SendEmail {
  canExecute: boolean;
  url: string;
  [key: string]: unknown;
}

export const sendEmailSchema: Schema<SendEmail> = expandoObject({
  canExecute: ['can_execute', boolean()],
  url: ['url', string()],
});
