/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema } from '../schema';
import { CreditScheme, creditSchemeSchema } from './creditScheme';

export interface CreditSchemeRequest {
  creditScheme: CreditScheme;
}

export const creditSchemeRequestSchema: Schema<CreditSchemeRequest> = object({
  creditScheme: ['credit_scheme', creditSchemeSchema],
});
