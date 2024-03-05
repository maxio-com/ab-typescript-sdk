/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { ServiceCredit, serviceCreditSchema } from './serviceCredit';

export interface ServiceCreditResponse {
  serviceCredit: ServiceCredit;
  [key: string]: unknown;
}

export const serviceCreditResponseSchema: Schema<ServiceCreditResponse> = expandoObject(
  { serviceCredit: ['service_credit', lazy(() => serviceCreditSchema)] }
);
