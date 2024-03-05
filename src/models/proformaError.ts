/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { BaseStringError, baseStringErrorSchema } from './baseStringError';

export interface ProformaError {
  /** The error is base if it is not directly associated with a single attribute. */
  subscription?: BaseStringError;
  [key: string]: unknown;
}

export const proformaErrorSchema: Schema<ProformaError> = expandoObject({
  subscription: ['subscription', optional(lazy(() => baseStringErrorSchema))],
});
