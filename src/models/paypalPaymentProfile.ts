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
import { PaymentType, paymentTypeSchema } from './paymentType';
import { PayPalVault, payPalVaultSchema } from './payPalVault';

export interface PaypalPaymentProfile {
  /** The Chargify-assigned ID of the stored PayPal payment profile. */
  id?: number;
  /** The first name of the PayPal account holder */
  firstName?: string;
  /** The last name of the PayPal account holder */
  lastName?: string;
  /** The Chargify-assigned id for the customer record to which the PayPal account belongs */
  customerId?: number;
  /** The vault that stores the payment profile with the provided vault_token. */
  currentVault?: PayPalVault;
  /** The “token” provided by your vault storage for an already stored payment profile */
  vaultToken?: string;
  /** The current billing street address for the PayPal account */
  billingAddress?: string | null;
  /** The current billing address city for the PayPal account */
  billingCity?: string | null;
  /** The current billing address state for the PayPal account */
  billingState?: string | null;
  /** The current billing address zip code for the PayPal account */
  billingZip?: string | null;
  /** The current billing address country for the PayPal account */
  billingCountry?: string | null;
  customerVaultToken?: string | null;
  /** The current billing street address, second line, for the PayPal account */
  billingAddress2?: string | null;
  paymentType: PaymentType;
  siteGatewaySettingId?: number | null;
  gatewayHandle?: string | null;
  paypalEmail?: string;
  /** A timestamp indicating when this payment profile was created */
  createdAt?: string;
  /** A timestamp indicating when this payment profile was last updated */
  updatedAt?: string;
  [key: string]: unknown;
}

export const paypalPaymentProfileSchema: Schema<PaypalPaymentProfile> = expandoObject(
  {
    id: ['id', optional(number())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    customerId: ['customer_id', optional(number())],
    currentVault: ['current_vault', optional(payPalVaultSchema)],
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
    paypalEmail: ['paypal_email', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
  }
);
