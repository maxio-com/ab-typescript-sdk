/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CurrentVault
 */
export enum CurrentVault {
  Adyen = 'adyen',
  Authorizenet = 'authorizenet',
  Avalara = 'avalara',
  Beanstream = 'beanstream',
  BlueSnap = 'blue_snap',
  Bogus = 'bogus',
  BraintreeBlue = 'braintree_blue',
  Checkout = 'checkout',
  Cybersource = 'cybersource',
  Elavon = 'elavon',
  Eway = 'eway',
  EwayRapidStd = 'eway_rapid_std',
  Firstdata = 'firstdata',
  Forte = 'forte',
  Gocardless = 'gocardless',
  Litle = 'litle',
  MaxioPayments = 'maxio_payments',
  Moduslink = 'moduslink',
  Moneris = 'moneris',
  Nmi = 'nmi',
  Orbital = 'orbital',
  PaymentExpress = 'payment_express',
  Pin = 'pin',
  Square = 'square',
  StripeConnect = 'stripe_connect',
  TrustCommerce = 'trust_commerce',
  Unipaas = 'unipaas',
}

/**
 * Schema for CurrentVault
 */
export const currentVaultSchema: Schema<CurrentVault> = stringEnum(CurrentVault);
