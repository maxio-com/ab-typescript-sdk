
# Create Prepaid Usage Component Price Point

## Structure

`CreatePrepaidUsageComponentPricePoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `handle` | `string \| undefined` | Optional | - |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`Price[]`](../../doc/models/price.md) | Required | - |
| `overagePricing` | [`OveragePricing`](../../doc/models/overage-pricing.md) | Required | - |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site.<br><br>**Default**: `true` |
| `rolloverPrepaidRemainder` | `boolean \| undefined` | Optional | (only for prepaid usage components) Boolean which controls whether or not remaining units should be rolled over to the next period. |
| `renewPrepaidAllocation` | `boolean \| undefined` | Optional | (only for prepaid usage components) Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period. |
| `expirationInterval` | `number \| undefined` | Optional | (only for prepaid usage components where rollover_prepaid_remainder is true) The number of `expiration_interval_unit`s after which rollover amounts should expire. |
| `expirationIntervalUnit` | [`ExpirationIntervalUnit \| null \| undefined`](../../doc/models/expiration-interval-unit.md) | Optional | (only for prepaid usage components where rollover_prepaid_remainder is true) A string representing the expiration interval unit for this component, either month or day. |

## Example

```ts
import {
  CreatePrepaidUsageComponentPricePoint,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createPrepaidUsageComponentPricePoint: CreatePrepaidUsageComponentPricePoint = {
  name: 'name2',
  pricingScheme: PricingScheme.PerUnit,
  prices: [
    {
      startingQuantity: 242,
      unitPrice: 23.26,
      endingQuantity: 40,
    }
  ],
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
  handle: 'handle8',
  useSiteExchangeRate: true,
  rolloverPrepaidRemainder: false,
  renewPrepaidAllocation: false,
  expirationInterval: 165.7,
};
```

