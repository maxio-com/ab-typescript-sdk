
# Component Cost Data

## Structure

`ComponentCostData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentCodeId` | `number \| null \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `productId` | `number \| undefined` | Optional | - |
| `quantity` | `string \| undefined` | Optional | - |
| `amount` | `string \| undefined` | Optional | - |
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `tiers` | [`ComponentCostDataRateTier[] \| undefined`](../../doc/models/component-cost-data-rate-tier.md) | Optional | - |

## Example

```ts
import { ComponentCostData } from '@maxio-com/advanced-billing-sdk';

const componentCostData: ComponentCostData = {
  componentCodeId: 40,
  pricePointId: 210,
  productId: 18,
  quantity: 'quantity4',
  amount: 'amount0',
};
```

