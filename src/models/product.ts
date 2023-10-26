/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ProductExpirationIntervalUnit,
  productExpirationIntervalUnitSchema,
} from './containers/productExpirationIntervalUnit';
import {
  ProductIntervalUnit,
  productIntervalUnitSchema,
} from './containers/productIntervalUnit';
import {
  ProductTrialIntervalUnit,
  productTrialIntervalUnitSchema,
} from './containers/productTrialIntervalUnit';
import { ProductFamily, productFamilySchema } from './productFamily';
import { PublicSignupPage, publicSignupPageSchema } from './publicSignupPage';

export interface Product {
  id?: number;
  /** The product name */
  name?: string;
  /** The product API handle */
  handle?: string | null;
  /** The product description */
  description?: string;
  /** E.g. Internal ID or SKU Number */
  accountingCode?: string | null;
  /** Deprecated value that can be ignored unless you have legacy hosted pages. For Public Signup Page users, please read this attribute from under the signup page. */
  requestCreditCard?: boolean;
  /** A numerical interval for the length a subscription to this product will run before it expires. See the description of interval for a description of how this value is coupled with an interval unit to calculate the full interval */
  expirationInterval?: number | null;
  /** A string representing the trial interval unit for this product, either month or day */
  expirationIntervalUnit?: ProductExpirationIntervalUnit | null;
  /** Timestamp indicating when this product was created */
  createdAt?: string;
  /** Timestamp indicating when this product was last updated */
  updatedAt?: string;
  /** The product price, in integer cents */
  priceInCents?: number;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this product would renew every 30 days */
  interval?: number;
  /** A string representing the interval unit for this product, either month or day */
  intervalUnit?: ProductIntervalUnit;
  /** The up front charge you have specified. */
  initialChargeInCents?: number | null;
  /** The price of the trial period for a subscription to this product, in integer cents. */
  trialPriceInCents?: number | null;
  /** A numerical interval for the length of the trial period of a subscription to this product. See the description of interval for a description of how this value is coupled with an interval unit to calculate the full interval */
  trialInterval?: number | null;
  /** A string representing the trial interval unit for this product, either month or day */
  trialIntervalUnit?: ProductTrialIntervalUnit | null;
  /** Timestamp indicating when this product was archived */
  archivedAt?: string | null;
  /** Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. */
  requireCreditCard?: boolean;
  returnParams?: string | null;
  taxable?: boolean;
  /** The url to which a customer will be returned after a successful account update */
  updateReturnUrl?: string | null;
  initialChargeAfterTrial?: boolean;
  /** The version of the product */
  versionNumber?: number;
  /** The parameters will append to the url after a successful account update. See [help documentation](https://help.chargify.com/products/product-editing.html#return-parameters-after-account-update) */
  updateReturnParams?: string | null;
  productFamily?: ProductFamily;
  publicSignupPages?: PublicSignupPage[];
  productPricePointName?: string;
  /** A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. */
  requestBillingAddress?: boolean;
  /** A boolean indicating whether a billing address is required to add a payment profile, especially at signup. */
  requireBillingAddress?: boolean;
  /** A boolean indicating whether a shipping address is required for the customer, especially at signup. */
  requireShippingAddress?: boolean;
  /** A string representing the tax code related to the product type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. */
  taxCode?: string | null;
  defaultProductPricePointId?: number;
  useSiteExchangeRate?: boolean | null;
  /** One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other */
  itemCategory?: string | null;
  productPricePointId?: number;
  productPricePointHandle?: string | null;
}

export const productSchema: Schema<Product> = object({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  handle: ['handle', optional(nullable(string()))],
  description: ['description', optional(string())],
  accountingCode: ['accounting_code', optional(nullable(string()))],
  requestCreditCard: ['request_credit_card', optional(boolean())],
  expirationInterval: ['expiration_interval', optional(nullable(number()))],
  expirationIntervalUnit: [
    'expiration_interval_unit',
    optional(nullable(productExpirationIntervalUnitSchema)),
  ],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  priceInCents: ['price_in_cents', optional(number())],
  interval: ['interval', optional(number())],
  intervalUnit: ['interval_unit', optional(productIntervalUnitSchema)],
  initialChargeInCents: [
    'initial_charge_in_cents',
    optional(nullable(number())),
  ],
  trialPriceInCents: ['trial_price_in_cents', optional(nullable(number()))],
  trialInterval: ['trial_interval', optional(nullable(number()))],
  trialIntervalUnit: [
    'trial_interval_unit',
    optional(nullable(productTrialIntervalUnitSchema)),
  ],
  archivedAt: ['archived_at', optional(nullable(string()))],
  requireCreditCard: ['require_credit_card', optional(boolean())],
  returnParams: ['return_params', optional(nullable(string()))],
  taxable: ['taxable', optional(boolean())],
  updateReturnUrl: ['update_return_url', optional(nullable(string()))],
  initialChargeAfterTrial: ['initial_charge_after_trial', optional(boolean())],
  versionNumber: ['version_number', optional(number())],
  updateReturnParams: ['update_return_params', optional(nullable(string()))],
  productFamily: ['product_family', optional(lazy(() => productFamilySchema))],
  publicSignupPages: [
    'public_signup_pages',
    optional(array(lazy(() => publicSignupPageSchema))),
  ],
  productPricePointName: ['product_price_point_name', optional(string())],
  requestBillingAddress: ['request_billing_address', optional(boolean())],
  requireBillingAddress: ['require_billing_address', optional(boolean())],
  requireShippingAddress: ['require_shipping_address', optional(boolean())],
  taxCode: ['tax_code', optional(nullable(string()))],
  defaultProductPricePointId: [
    'default_product_price_point_id',
    optional(number()),
  ],
  useSiteExchangeRate: [
    'use_site_exchange_rate',
    optional(nullable(boolean())),
  ],
  itemCategory: ['item_category', optional(nullable(string()))],
  productPricePointId: ['product_price_point_id', optional(number())],
  productPricePointHandle: [
    'product_price_point_handle',
    optional(nullable(string())),
  ],
});
