/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  PrepaidUsageComponentUnitPrice,
  prepaidUsageComponentUnitPriceSchema,
} from './containers/prepaidUsageComponentUnitPrice';
import {
  CreatePrepaidUsageComponentPricePoint,
  createPrepaidUsageComponentPricePointSchema,
} from './createPrepaidUsageComponentPricePoint';
import { CreditType, creditTypeSchema } from './creditType';
import {
  ExpirationIntervalUnit,
  expirationIntervalUnitSchema,
} from './expirationIntervalUnit';
import { OveragePricing, overagePricingSchema } from './overagePricing';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface PrepaidUsageComponent {
  /** A name for this component that is suitable for showing customers and displaying on billing statements, ie. "Minutes". */
  name: string;
  /** The name of the unit of measurement for the component. It should be singular since it will be automatically pluralized when necessary. i.e. “message”, which may then be shown as “5 messages” on a subscription’s component line-item */
  unitName: string;
  /** A description for the component that will be displayed to the user on the hosted signup page. */
  description?: string;
  /** A unique identifier for your use that can be used to retrieve this component is subsequent requests.  Must start with a letter or number and may only contain lowercase letters, numbers, or the characters '.', ':', '-', or '_'. */
  handle?: string;
  /** Boolean flag describing whether a component is taxable or not. */
  taxable?: boolean;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme: PricingScheme;
  /** (Not required for ‘per_unit’ pricing schemes) One or more price brackets. See [Price Bracket Rules](https://maxio.zendesk.com/hc/en-us/articles/24261149166733-Component-Pricing-Schemes#price-bracket-rules) for an overview of how price brackets work for different pricing schemes. */
  prices?: Price[];
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.
   * Available values: `full`, `prorated`, `none`.
   */
  upgradeCharge?: CreditType | null;
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.
   * Available values: `full`, `prorated`, `none`.
   */
  downgradeCredit?: CreditType | null;
  pricePoints?: CreatePrepaidUsageComponentPricePoint[];
  /** The amount the customer will be charged per unit when the pricing scheme is “per_unit”. For On/Off Components, this is the amount that the customer will be charged when they turn the component on for the subscription. The price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065 */
  unitPrice?: PrepaidUsageComponentUnitPrice;
  /** A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. */
  taxCode?: string;
  /** (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. */
  hideDateRangeOnInvoice?: boolean;
  overagePricing: OveragePricing;
  /** Boolean which controls whether or not remaining units should be rolled over to the next period */
  rolloverPrepaidRemainder?: boolean;
  /** Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period */
  renewPrepaidAllocation?: boolean;
  /** (only for prepaid usage components where rollover_prepaid_remainder is true) The number of `expiration_interval_unit`s after which rollover amounts should expire */
  expirationInterval?: number;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  displayOnHostedPage?: boolean;
  allowFractionalQuantities?: boolean;
  publicSignupPageIds?: number[];
  [key: string]: unknown;
}

export const prepaidUsageComponentSchema: Schema<PrepaidUsageComponent> = expandoObject(
  {
    name: ['name', string()],
    unitName: ['unit_name', string()],
    description: ['description', optional(string())],
    handle: ['handle', optional(string())],
    taxable: ['taxable', optional(boolean())],
    pricingScheme: ['pricing_scheme', pricingSchemeSchema],
    prices: ['prices', optional(array(lazy(() => priceSchema)))],
    upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
    downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
    pricePoints: [
      'price_points',
      optional(array(lazy(() => createPrepaidUsageComponentPricePointSchema))),
    ],
    unitPrice: ['unit_price', optional(prepaidUsageComponentUnitPriceSchema)],
    taxCode: ['tax_code', optional(string())],
    hideDateRangeOnInvoice: ['hide_date_range_on_invoice', optional(boolean())],
    overagePricing: ['overage_pricing', lazy(() => overagePricingSchema)],
    rolloverPrepaidRemainder: [
      'rollover_prepaid_remainder',
      optional(boolean()),
    ],
    renewPrepaidAllocation: ['renew_prepaid_allocation', optional(boolean())],
    expirationInterval: ['expiration_interval', optional(number())],
    expirationIntervalUnit: [
      'expiration_interval_unit',
      optional(nullable(expirationIntervalUnitSchema)),
    ],
    displayOnHostedPage: ['display_on_hosted_page', optional(boolean())],
    allowFractionalQuantities: [
      'allow_fractional_quantities',
      optional(boolean()),
    ],
    publicSignupPageIds: ['public_signup_page_ids', optional(array(number()))],
  }
);
