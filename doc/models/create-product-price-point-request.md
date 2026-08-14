
# Create Product Price Point Request

## Structure

`CreateProductPricePointRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | [`CreateProductPricePoint`](../../doc/models/create-product-price-point.md) | Required | - |

## Example

```ts
import {
  CreateProductPricePointRequest,
  IntervalUnit,
  TrialType,
} from '@maxio-com/advanced-billing-sdk';

const createProductPricePointRequest: CreateProductPricePointRequest = {
  pricePoint: {
    name: 'name0',
    priceInCents: BigInt(196),
    interval: 44,
    intervalUnit: IntervalUnit.Day,
    handle: 'handle6',
    trialPriceInCents: BigInt(108),
    trialInterval: 202,
    trialIntervalUnit: IntervalUnit.Day,
    trialType: TrialType.NoObligation,
    useSiteExchangeRate: true,
  },
};
```

