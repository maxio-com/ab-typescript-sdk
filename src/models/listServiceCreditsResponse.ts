/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { ServiceCredit1, serviceCredit1Schema } from './serviceCredit1';

export interface ListServiceCreditsResponse {
  serviceCredits?: ServiceCredit1[];
  [key: string]: unknown;
}

export const listServiceCreditsResponseSchema: Schema<ListServiceCreditsResponse> = expandoObject(
  {
    serviceCredits: [
      'service_credits',
      optional(array(lazy(() => serviceCredit1Schema))),
    ],
  }
);
