/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { AllocationPreview, allocationPreviewSchema } from './allocationPreview';

export interface AllocationPreviewResponse {
  allocationPreview: AllocationPreview;
}

export const allocationPreviewResponseSchema: Schema<AllocationPreviewResponse> = object(
  {
    allocationPreview: [
      'allocation_preview',
      lazy(() => allocationPreviewSchema),
    ],
  }
);
