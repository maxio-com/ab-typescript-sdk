
# Create Usage Request

## Structure

`CreateUsageRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `usage` | [`CreateUsage`](../../doc/models/create-usage.md) | Required | - |

## Example

```ts
import {
  CreateUsageRequest,
  IntervalUnit,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createUsageRequest: CreateUsageRequest = {
  usage: {
    quantity: 162.34,
    pricePointId: 'price_point_id0',
    memo: 'memo2',
    billingSchedule: {
      initialBillingAt: '2016-03-13T12:52:32.123Z',
    },
    customPrice: {
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
      taxIncluded: false,
      pricingScheme: PricingScheme.Stairstep,
      interval: 66,
      intervalUnit: IntervalUnit.Day,
      listPricePointId: 174,
    },
  },
};
```

