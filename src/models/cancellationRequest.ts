/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CancellationOptions,
  cancellationOptionsSchema,
} from './cancellationOptions';

export interface CancellationRequest {
  subscription: CancellationOptions;
}

export const cancellationRequestSchema: Schema<CancellationRequest> = object({
  subscription: ['subscription', lazy(() => cancellationOptionsSchema)],
});
