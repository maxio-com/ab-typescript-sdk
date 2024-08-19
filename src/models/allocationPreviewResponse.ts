/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  AllocationPreview,
  allocationPreviewSchema,
} from './allocationPreview';

export interface AllocationPreviewResponse {
  allocationPreview: AllocationPreview;
  [key: string]: unknown;
}

export const allocationPreviewResponseSchema: Schema<AllocationPreviewResponse> = expandoObject(
  {
    allocationPreview: [
      'allocation_preview',
      lazy(() => allocationPreviewSchema),
    ],
  }
);
