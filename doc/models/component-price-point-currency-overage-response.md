
# Component Price Point Currency Overage Response

## Structure

`ComponentPricePointCurrencyOverageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | [`CurrencyOveragePrices`](../../doc/models/currency-overage-prices.md) | Required | Extends a component price point with currency overage prices. |

## Example

```ts
import {
  ComponentPricePointCurrencyOverageResponse,
  PricePointType,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const componentPricePointCurrencyOverageResponse: ComponentPricePointCurrencyOverageResponse = {
  pricePoint: {
    id: 248,
    type: PricePointType.Default,
    mDefault: false,
    name: 'name0',
    pricingScheme: PricingScheme.PerUnit,
  },
};
```

