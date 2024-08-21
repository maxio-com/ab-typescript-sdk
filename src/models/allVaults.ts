/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AllVaults
 */
export enum AllVaults {
  Adyen = 'adyen',
  Authorizenet = 'authorizenet',
  Beanstream = 'beanstream',
  BlueSnap = 'blue_snap',
  Bogus = 'bogus',
  Braintree1 = 'braintree1',
  BraintreeBlue = 'braintree_blue',
  Checkout = 'checkout',
  Cybersource = 'cybersource',
  Elavon = 'elavon',
  Eway = 'eway',
  EwayRapid = 'eway_rapid',
  EwayRapidStd = 'eway_rapid_std',
  Firstdata = 'firstdata',
  Forte = 'forte',
  Gocardless = 'gocardless',
  Litle = 'litle',
  MaxioPayments = 'maxio_payments',
  Maxp = 'maxp',
  Moduslink = 'moduslink',
  Moneris = 'moneris',
  Nmi = 'nmi',
  Orbital = 'orbital',
  PaymentExpress = 'payment_express',
  Paymill = 'paymill',
  Paypal = 'paypal',
  PaypalComplete = 'paypal_complete',
  Pin = 'pin',
  Square = 'square',
  Stripe = 'stripe',
  StripeConnect = 'stripe_connect',
  TrustCommerce = 'trust_commerce',
  Unipaas = 'unipaas',
  Wirecard = 'wirecard',
}

/**
 * Schema for AllVaults
 */
export const allVaultsSchema: Schema<AllVaults> = stringEnum(AllVaults);
