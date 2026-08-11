
# Prepaid Usage Component

## Structure

`PrepaidUsageComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | A name for this component that is suitable for showing customers and displaying on billing statements, e.g., "Minutes". |
| `unitName` | `string` | Required | The name of the unit of measurement for the component. It should be singular since it will be automatically pluralized when necessary. e.g., “message”, which may then be shown as “5 messages” on a subscription’s component line-item |
| `description` | `string \| undefined` | Optional | A description for the component that will be displayed to the user on the hosted signup page. |
| `handle` | `string \| undefined` | Optional | A unique identifier for your use that can be used to retrieve this component in subsequent requests. Must start with a letter or number and may only contain lowercase letters, numbers, or the characters '.', ':', '-', or '_'.<br><br>**Constraints**: *Pattern*: `^[a-z0-9][a-z0-9\-_:.]*$` |
| `taxable` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is taxable or not. |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | (Not required for ‘per_unit’ pricing schemes) One or more price brackets. See [Price Bracket Rules](https://maxio.zendesk.com/hc/en-us/articles/24261149166733-Component-Pricing-Schemes#price-bracket-rules) for an overview of how price brackets work for different pricing schemes. |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. |
| `pricePoints` | [`CreatePrepaidUsageComponentPricePoint[] \| undefined`](../../doc/models/create-prepaid-usage-component-price-point.md) | Optional | - |
| `unitPrice` | [`PrepaidUsageComponentUnitPrice \| undefined`](../../doc/models/containers/prepaid-usage-component-unit-price.md) | Optional | This is a container for one-of cases. |
| `taxCode` | `string \| undefined` | Optional | A string representing the tax code related to the component type. This is especially important when using AvaTax to tax based on locale. This attribute has a max length of 25 characters. |
| `hideDateRangeOnInvoice` | `boolean \| undefined` | Optional | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `overagePricing` | [`OveragePricing`](../../doc/models/overage-pricing.md) | Required | - |
| `rolloverPrepaidRemainder` | `boolean \| undefined` | Optional | Boolean which controls whether or not remaining units should be rolled over to the next period. |
| `renewPrepaidAllocation` | `boolean \| undefined` | Optional | Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period. |
| `expirationInterval` | `number \| undefined` | Optional | (only for prepaid usage components where rollover_prepaid_remainder is true) The number of `expiration_interval_unit`s after which rollover amounts should expire |
| `expirationIntervalUnit` | [`ExpirationIntervalUnit \| null \| undefined`](../../doc/models/expiration-interval-unit.md) | Optional | - |
| `displayOnHostedPage` | `boolean \| undefined` | Optional | - |
| `allowFractionalQuantities` | `boolean \| undefined` | Optional | - |
| `publicSignupPageIds` | `number[] \| undefined` | Optional | - |
| `unspscCode` | `string \| null \| undefined` | Optional | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. When set, this value is sent as the commodity code on invoice line items for this component instead of the default derived from item_category. |

## Example

```ts
import {
  CreditType,
  PrepaidUsageComponent,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const prepaidUsageComponent: PrepaidUsageComponent = {
  name: 'name2',
  unitName: 'unit_name4',
  pricingScheme: PricingScheme.PerUnit,
  overagePricing: {
    pricingScheme: PricingScheme.Stairstep,
    prices: [
      {
        startingQuantity: 242,
        unitPrice: 23.26,
        endingQuantity: 40,
      }
    ],
  },
  description: 'description8',
  handle: 'handle8',
  taxable: false,
  prices: [
    {
      startingQuantity: 242,
      unitPrice: 23.26,
      endingQuantity: 40,
    },
    {
      startingQuantity: 242,
      unitPrice: 23.26,
      endingQuantity: 40,
    },
    {
      startingQuantity: 242,
      unitPrice: 23.26,
      endingQuantity: 40,
    }
  ],
  upgradeCharge: CreditType.None,
};
```

