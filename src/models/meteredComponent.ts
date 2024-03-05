/**
 * Maxio Advanced BillingLib
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
  ComponentPricePointItem,
  componentPricePointItemSchema,
} from './componentPricePointItem';
import {
  MeteredComponentUnitPrice,
  meteredComponentUnitPriceSchema,
} from './containers/meteredComponentUnitPrice';
import { CreditType, creditTypeSchema } from './creditType';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface MeteredComponent {
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
  /** (Not required for ‘per_unit’ pricing schemes) One or more price brackets. See [Price Bracket Rules](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405020625677#price-bracket-rules) for an overview of how price brackets work for different pricing schemes. */
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
  pricePoints?: ComponentPricePointItem[];
  /** The amount the customer will be charged per unit when the pricing scheme is “per_unit”. For On/Off Components, this is the amount that the customer will be charged when they turn the component on for the subscription. The price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065 */
  unitPrice?: MeteredComponentUnitPrice;
  /** A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. */
  taxCode?: string;
  /** (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. */
  hideDateRangeOnInvoice?: boolean;
  /** deprecated May 2011 - use unit_price instead */
  priceInCents?: string;
  displayOnHostedPage?: boolean;
  allowFractionalQuantities?: boolean;
  publicSignupPageIds?: number[];
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component's default price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component's default price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit;
  [key: string]: unknown;
}

export const meteredComponentSchema: Schema<MeteredComponent> = expandoObject({
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
    optional(array(lazy(() => componentPricePointItemSchema))),
  ],
  unitPrice: ['unit_price', optional(meteredComponentUnitPriceSchema)],
  taxCode: ['tax_code', optional(string())],
  hideDateRangeOnInvoice: ['hide_date_range_on_invoice', optional(boolean())],
  priceInCents: ['price_in_cents', optional(string())],
  displayOnHostedPage: ['display_on_hosted_page', optional(boolean())],
  allowFractionalQuantities: [
    'allow_fractional_quantities',
    optional(boolean()),
  ],
  publicSignupPageIds: ['public_signup_page_ids', optional(array(number()))],
  interval: ['interval', optional(number())],
  intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
});
