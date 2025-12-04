/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import { ServiceCredit1, serviceCredit1Schema } from './serviceCredit1.js';

export interface ListServiceCreditsResponse {
  serviceCredits?: ServiceCredit1[];
  [key: string]: unknown;
}

export const listServiceCreditsResponseSchema: Schema<ListServiceCreditsResponse> = lazy(
  () =>
    expandoObject({
      serviceCredits: [
        'service_credits',
        optional(array(serviceCredit1Schema)),
      ],
    })
);
