/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  CustomerCustomFieldsChange,
  customerCustomFieldsChangeSchema,
} from '../customerCustomFieldsChange';

/** This is a container type for one-of types. */
export type CustomerChangeCustomFields = CustomerCustomFieldsChange;

export const customerChangeCustomFieldsSchema: Schema<CustomerChangeCustomFields> = oneOf(
  [customerCustomFieldsChangeSchema]
);

export namespace CustomerChangeCustomFields {
  /**
  * Validation method to narrow down union type to CustomerCustomFieldsChange type case.
  *
  * This is Customer Custom Fields Change case.
  */
  export function isCustomerCustomFieldsChange(value: unknown): value is CustomerCustomFieldsChange {
    const validationResult = validateAndMap(value, customerCustomFieldsChangeSchema);
    return validationResult.errors === false;
  }
}
