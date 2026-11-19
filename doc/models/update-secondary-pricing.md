
# Update Secondary Pricing

Hybrid Pricing only. Changes the secondary pricing model of an existing hybrid price point. Send `pricing_scheme` (or the top-level `secondary_pricing_scheme`) every time you send this block; a block without a scheme returns `422`. Brackets sent without an `id` are added to the existing ones rather than replacing them, so to change a bracket set, update existing brackets by `id` and remove the ones you no longer want with `_destroy: true`. See [Hybrid Pricing](page:introduction/basic-concepts/hybrid-pricing).

## Structure

`UpdateSecondaryPricing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`UpdatePrice[] \| undefined`](../../doc/models/update-price.md) | Optional | - |

## Example

```ts
import {
  PricingScheme,
  UpdateSecondaryPricing,
} from '@maxio-com/advanced-billing-sdk';

const updateSecondaryPricing: UpdateSecondaryPricing = {
  pricingScheme: PricingScheme.PerUnit,
  prices: [
    {
      id: 18,
      endingQuantity: 40,
      unitPrice: 23.26,
      destroy: false,
      startingQuantity: 242,
    }
  ],
};
```

