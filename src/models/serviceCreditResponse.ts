/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { ServiceCredit, serviceCreditSchema } from './serviceCredit';

export interface ServiceCreditResponse {
  serviceCredit: ServiceCredit;
}

export const serviceCreditResponseSchema: Schema<ServiceCreditResponse> = object(
  { serviceCredit: ['service_credit', lazy(() => serviceCreditSchema)] }
);
