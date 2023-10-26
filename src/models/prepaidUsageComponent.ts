/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  PrepaidUsageComponentExpirationIntervalUnit,
  prepaidUsageComponentExpirationIntervalUnitSchema,
} from './containers/prepaidUsageComponentExpirationIntervalUnit';
import {
  PrepaidUsageComponentPricingScheme,
  prepaidUsageComponentPricingSchemeSchema,
} from './containers/prepaidUsageComponentPricingScheme';
import {
  PrepaidUsageComponentUnitPrice,
  prepaidUsageComponentUnitPriceSchema,
} from './containers/prepaidUsageComponentUnitPrice';
import { OveragePricing, overagePricingSchema } from './overagePricing';
import {
  PrepaidComponentPricePoint,
  prepaidComponentPricePointSchema,
} from './prepaidComponentPricePoint';
import { Price, priceSchema } from './price';

export interface PrepaidUsageComponent {
  /** A name for this component that is suitable for showing customers and displaying on billing statements, ie. "Minutes". */
  name?: string;
  /** The name of the unit of measurement for the component. It should be singular since it will be automatically pluralized when necessary. i.e. “message”, which may then be shown as “5 messages” on a subscription’s component line-item */
  unitName?: string;
  /** A description for the component that will be displayed to the user on the hosted signup page. */
  description?: string;
  /** A unique identifier for your use that can be used to retrieve this component is subsequent requests.  Must start with a letter or number and may only contain lowercase letters, numbers, or the characters '.', ':', '-', or '_'. */
  handle?: string;
  /** Boolean flag describing whether a component is taxable or not. */
  taxable?: boolean;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: PrepaidUsageComponentPricingScheme;
  /** (Not required for ‘per_unit’ pricing schemes) One or more price brackets. See [Price Bracket Rules](https://chargify.zendesk.com/hc/en-us/articles/4407755865883#general-price-bracket-rules) for an overview of how price brackets work for different pricing schemes. */
  prices?: Price[];
  upgradeCharge?: string;
  downgradeCredit?: string;
  pricePoints?: PrepaidComponentPricePoint[];
  /** The amount the customer will be charged per unit when the pricing scheme is “per_unit”. For On/Off Components, this is the amount that the customer will be charged when they turn the component on for the subscription. The price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065 */
  unitPrice?: PrepaidUsageComponentUnitPrice;
  /** A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. */
  taxCode?: string;
  /** (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. */
  hideDateRangeOnInvoice?: boolean;
  /** deprecated May 2011 - use unit_price instead */
  priceInCents?: string;
  overagePricing?: OveragePricing;
  /** Boolean which controls whether or not remaining units should be rolled over to the next period */
  rolloverPrepaidRemainder?: boolean;
  /** Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period */
  renewPrepaidAllocation?: boolean;
  /** (only for prepaid usage components where rollover_prepaid_remainder is true) The number of `expiration_interval_unit`s after which rollover amounts should expire */
  expirationInterval?: number;
  expirationIntervalUnit?: PrepaidUsageComponentExpirationIntervalUnit;
  displayOnHostedPage?: boolean;
  allowFractionalQuantities?: boolean;
  publicSignupPageIds?: number[];
}

export const prepaidUsageComponentSchema: Schema<PrepaidUsageComponent> = object(
  {
    name: ['name', optional(string())],
    unitName: ['unit_name', optional(string())],
    description: ['description', optional(string())],
    handle: ['handle', optional(string())],
    taxable: ['taxable', optional(boolean())],
    pricingScheme: [
      'pricing_scheme',
      optional(prepaidUsageComponentPricingSchemeSchema),
    ],
    prices: ['prices', optional(array(lazy(() => priceSchema)))],
    upgradeCharge: ['upgrade_charge', optional(string())],
    downgradeCredit: ['downgrade_credit', optional(string())],
    pricePoints: [
      'price_points',
      optional(array(lazy(() => prepaidComponentPricePointSchema))),
    ],
    unitPrice: ['unit_price', optional(prepaidUsageComponentUnitPriceSchema)],
    taxCode: ['tax_code', optional(string())],
    hideDateRangeOnInvoice: ['hide_date_range_on_invoice', optional(boolean())],
    priceInCents: ['price_in_cents', optional(string())],
    overagePricing: [
      'overage_pricing',
      optional(lazy(() => overagePricingSchema)),
    ],
    rolloverPrepaidRemainder: [
      'rollover_prepaid_remainder',
      optional(boolean()),
    ],
    renewPrepaidAllocation: ['renew_prepaid_allocation', optional(boolean())],
    expirationInterval: ['expiration_interval', optional(number())],
    expirationIntervalUnit: [
      'expiration_interval_unit',
      optional(prepaidUsageComponentExpirationIntervalUnitSchema),
    ],
    displayOnHostedPage: ['display_on_hosted_page', optional(boolean())],
    allowFractionalQuantities: [
      'allow_fractional_quantities',
      optional(boolean()),
    ],
    publicSignupPageIds: ['public_signup_page_ids', optional(array(number()))],
  }
);
