
# Overage Pricing

## Structure

`OveragePricing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | - |

## Example

```ts
import {
  OveragePricing,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const overagePricing: OveragePricing = {
  pricingScheme: PricingScheme.PerUnit,
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
    }
  ],
};
```

