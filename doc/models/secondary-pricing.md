
# Secondary Pricing

Hybrid Pricing only. The secondary pricing model that takes over once usage passes the primary model's included threshold. Applies to Quantity-Based and Metered Components on Sites with Hybrid Pricing enabled; ignored otherwise. Its `prices` brackets start at `1`, not at the primary model's highest `ending_quantity`. See [Hybrid Pricing](page:introduction/basic-concepts/hybrid-pricing).

## Structure

`SecondaryPricing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | Required, unless you send the top-level `secondary_pricing_scheme` instead (Create and Update Component Price Point only). A block with neither returns `422` (`Secondary pricing scheme must be defined`). |
| `prices` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | - |

## Example

```ts
import {
  PricingScheme,
  SecondaryPricing,
} from '@maxio-com/advanced-billing-sdk';

const secondaryPricing: SecondaryPricing = {
  pricingScheme: PricingScheme.Stairstep,
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
};
```

