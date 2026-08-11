
# Bulk Create Product Price Points Request

## Structure

`BulkCreateProductPricePointsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoints` | [`CreateProductPricePoint[]`](../../doc/models/create-product-price-point.md) | Required | - |

## Example

```ts
import {
  BulkCreateProductPricePointsRequest,
  IntervalUnit,
  TrialType,
} from '@maxio-com/advanced-billing-sdk';

const bulkCreateProductPricePointsRequest: BulkCreateProductPricePointsRequest = {
  pricePoints: [
    {
      name: 'name2',
      priceInCents: BigInt(108),
      interval: 92,
      intervalUnit: IntervalUnit.Day,
      handle: 'handle8',
      trialPriceInCents: BigInt(196),
      trialInterval: 250,
      trialIntervalUnit: IntervalUnit.Day,
      trialType: TrialType.NoObligation,
      useSiteExchangeRate: true,
    }
  ],
};
```

