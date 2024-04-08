/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for GroupType
 */
export enum GroupType {
  SingleCustomer = 'single_customer',
  MultipleCustomers = 'multiple_customers',
}

/**
 * Schema for GroupType
 */
export const  groupTypeSchema: Schema<GroupType> = stringEnum(GroupType);
