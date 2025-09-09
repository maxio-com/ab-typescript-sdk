/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema } from '../schema.js';
import { CreditScheme, creditSchemeSchema } from './creditScheme.js';

export interface CreditSchemeRequest {
  creditScheme: CreditScheme;
  [key: string]: unknown;
}

export const creditSchemeRequestSchema: Schema<CreditSchemeRequest> = expandoObject(
  { creditScheme: ['credit_scheme', creditSchemeSchema] }
);
