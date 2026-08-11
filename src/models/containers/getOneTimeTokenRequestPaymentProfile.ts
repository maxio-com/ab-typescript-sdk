/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  anyOf,
  isMappedValueValidForSchema,
  lazy,
  Schema,
} from '../../schema.js';
import {
  GetOneTimeTokenBankAccountPaymentProfile,
  getOneTimeTokenBankAccountPaymentProfileSchema,
} from '../getOneTimeTokenBankAccountPaymentProfile.js';
import {
  GetOneTimeTokenPaymentProfile,
  getOneTimeTokenPaymentProfileSchema,
} from '../getOneTimeTokenPaymentProfile.js';

/** This is a container type for any-of types. */
export type GetOneTimeTokenRequestPaymentProfile =
  | GetOneTimeTokenPaymentProfile
  | GetOneTimeTokenBankAccountPaymentProfile;

export const getOneTimeTokenRequestPaymentProfileSchema: Schema<GetOneTimeTokenRequestPaymentProfile> = lazy(
  () =>
    anyOf([
      getOneTimeTokenPaymentProfileSchema,
      getOneTimeTokenBankAccountPaymentProfileSchema,
    ])
);

export namespace GetOneTimeTokenRequestPaymentProfile {
  /**
   * Validation method to narrow down union type to GetOneTimeTokenPaymentProfile type case.
   *
   * This is Get One Time Token Payment Profile case.
   */
  export function isGetOneTimeTokenPaymentProfile(
    value: unknown
  ): value is GetOneTimeTokenPaymentProfile {
    return isMappedValueValidForSchema(
      value,
      getOneTimeTokenPaymentProfileSchema
    );
  }

  /**
   * Validation method to narrow down union type to GetOneTimeTokenBankAccountPaymentProfile type case.
   *
   * This is Get One Time Token Bank Account Payment Profile case.
   */
  export function isGetOneTimeTokenBankAccountPaymentProfile(
    value: unknown
  ): value is GetOneTimeTokenBankAccountPaymentProfile {
    return isMappedValueValidForSchema(
      value,
      getOneTimeTokenBankAccountPaymentProfileSchema
    );
  }
}
