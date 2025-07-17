/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { ApplePayVault, applePayVaultSchema } from './applePayVault';
import { PaymentType, paymentTypeSchema } from './paymentType';

export interface ApplePayPaymentProfile {
  /** The Chargify-assigned ID of the Apple Pay payment profile. */
  id?: number;
  /** The first name of the Apple Pay account holder */
  firstName?: string;
  /** The last name of the Apple Pay account holder */
  lastName?: string;
  /** The Chargify-assigned id for the customer record to which the Apple Pay account belongs */
  customerId?: number;
  /** The vault that stores the payment profile with the provided vault_token. */
  currentVault?: ApplePayVault;
  /** The “token” provided by your vault storage for an already stored payment profile */
  vaultToken?: string;
  /** The current billing street address for the Apple Pay account */
  billingAddress?: string | null;
  /** The current billing address city for the Apple Pay account */
  billingCity?: string | null;
  /** The current billing address state for the Apple Pay account */
  billingState?: string | null;
  /** The current billing address zip code for the Apple Pay account */
  billingZip?: string | null;
  /** The current billing address country for the Apple Pay account */
  billingCountry?: string | null;
  customerVaultToken?: string | null;
  /** The current billing street address, second line, for the Apple Pay account */
  billingAddress2?: string | null;
  paymentType: PaymentType;
  siteGatewaySettingId?: number | null;
  gatewayHandle?: string | null;
  /** A timestamp indicating when this payment profile was created */
  createdAt?: string;
  /** A timestamp indicating when this payment profile was last updated */
  updatedAt?: string;
  [key: string]: unknown;
}

export const applePayPaymentProfileSchema: Schema<ApplePayPaymentProfile> = expandoObject(
  {
    id: ['id', optional(number())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    customerId: ['customer_id', optional(number())],
    currentVault: ['current_vault', optional(applePayVaultSchema)],
    vaultToken: ['vault_token', optional(string())],
    billingAddress: ['billing_address', optional(nullable(string()))],
    billingCity: ['billing_city', optional(nullable(string()))],
    billingState: ['billing_state', optional(nullable(string()))],
    billingZip: ['billing_zip', optional(nullable(string()))],
    billingCountry: ['billing_country', optional(nullable(string()))],
    customerVaultToken: ['customer_vault_token', optional(nullable(string()))],
    billingAddress2: ['billing_address_2', optional(nullable(string()))],
    paymentType: ['payment_type', paymentTypeSchema],
    siteGatewaySettingId: [
      'site_gateway_setting_id',
      optional(nullable(number())),
    ],
    gatewayHandle: ['gateway_handle', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
  }
);
