/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SignupCollectionMethodEnum
 */
export enum SignupCollectionMethodEnum {
  Remittance = 'remittance',
  Automatic = 'automatic',
}

/**
 * Schema for SignupCollectionMethodEnum
 */
export const signupCollectionMethodEnumSchema: Schema<SignupCollectionMethodEnum> = stringEnum(SignupCollectionMethodEnum);
