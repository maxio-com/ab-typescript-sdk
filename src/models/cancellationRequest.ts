/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CancellationOptions,
  cancellationOptionsSchema,
} from './cancellationOptions.js';

export interface CancellationRequest {
  subscription: CancellationOptions;
  [key: string]: unknown;
}

export const cancellationRequestSchema: Schema<CancellationRequest> = expandoObject(
  { subscription: ['subscription', lazy(() => cancellationOptionsSchema)] }
);
