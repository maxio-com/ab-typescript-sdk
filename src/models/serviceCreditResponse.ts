/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { ServiceCredit, serviceCreditSchema } from './serviceCredit.js';

export interface ServiceCreditResponse {
  serviceCredit: ServiceCredit;
  [key: string]: unknown;
}

export const serviceCreditResponseSchema: Schema<ServiceCreditResponse> = lazy(
  () =>
    expandoObject({ serviceCredit: ['service_credit', serviceCreditSchema] })
);
