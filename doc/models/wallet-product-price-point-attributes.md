
# Wallet Product Price Point Attributes

A price point to create for the Wallet Product, in the same call that creates or updates it.

## Structure

`WalletProductPricePointAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The price point's name. Required. Omitting it fails validation with a message that reads `Name: cannot be blank.`, not naming the price point. |
| `handle` | `string \| undefined` | Optional | - |
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `unitPrice` | `string \| null \| undefined` | Optional | Required when `pricing_scheme` is `per_unit`. |
| `taxIncluded` | `boolean \| undefined` | Optional | - |
| `interval` | `number \| undefined` | Optional | Requires Multifrequency to be enabled on the site. |
| `intervalUnit` | [`IntervalUnit \| undefined`](../../doc/models/interval-unit.md) | Optional | - |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | - |
| `prices` | [`Price1[] \| undefined`](../../doc/models/price-1.md) | Optional | Required for every `pricing_scheme` other than `per_unit`. |

## Example

```ts
import {
  PricingScheme,
  WalletProductPricePointAttributes,
} from '@maxio-com/advanced-billing-sdk';

const walletProductPricePointAttributes: WalletProductPricePointAttributes = {
  name: 'name8',
  handle: 'handle4',
  pricingScheme: PricingScheme.PerUnit,
  unitPrice: 'unit_price6',
  taxIncluded: false,
  interval: 120,
};
```

