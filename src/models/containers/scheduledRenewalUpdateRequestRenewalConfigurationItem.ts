/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  isMappedValueValidForSchema,
  lazy,
  oneOf,
  Schema,
} from '../../schema.js';
import {
  ScheduledRenewalItemRequestBodyComponent,
  scheduledRenewalItemRequestBodyComponentSchema,
} from '../scheduledRenewalItemRequestBodyComponent.js';
import {
  ScheduledRenewalItemRequestBodyProduct,
  scheduledRenewalItemRequestBodyProductSchema,
} from '../scheduledRenewalItemRequestBodyProduct.js';

/** This is a container type for one-of types. */
export type ScheduledRenewalUpdateRequestRenewalConfigurationItem =
  | ScheduledRenewalItemRequestBodyComponent
  | ScheduledRenewalItemRequestBodyProduct;

export const scheduledRenewalUpdateRequestRenewalConfigurationItemSchema: Schema<ScheduledRenewalUpdateRequestRenewalConfigurationItem> = lazy(
  () =>
    oneOf([
      scheduledRenewalItemRequestBodyComponentSchema,
      scheduledRenewalItemRequestBodyProductSchema,
    ])
);

export namespace ScheduledRenewalUpdateRequestRenewalConfigurationItem {
  /**
   * Validation method to narrow down union type to ScheduledRenewalItemRequestBodyComponent type case.
   *
   * This is Scheduled Renewal Item Request Body Component case.
   */
  export function isScheduledRenewalItemRequestBodyComponent(
    value: unknown
  ): value is ScheduledRenewalItemRequestBodyComponent {
    return isMappedValueValidForSchema(
      value,
      scheduledRenewalItemRequestBodyComponentSchema
    );
  }

  /**
   * Validation method to narrow down union type to ScheduledRenewalItemRequestBodyProduct type case.
   *
   * This is Scheduled Renewal Item Request Body Product case.
   */
  export function isScheduledRenewalItemRequestBodyProduct(
    value: unknown
  ): value is ScheduledRenewalItemRequestBodyProduct {
    return isMappedValueValidForSchema(
      value,
      scheduledRenewalItemRequestBodyProductSchema
    );
  }
}
