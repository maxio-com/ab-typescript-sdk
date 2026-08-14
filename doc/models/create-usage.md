
# Create Usage

## Structure

`CreateUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `quantity` | `number \| undefined` | Optional | integer by default or decimal number if fractional quantities are enabled for the component |
| `pricePointId` | `string \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `billingSchedule` | [`BillingSchedule \| undefined`](../../doc/models/billing-schedule.md) | Optional | Billing schedule settings for component allocations or usages on multi-frequency subscriptions. Use this to start a component's billing period on a custom date instead of aligning with the product charge schedule. |
| `customPrice` | [`ComponentCustomPrice \| undefined`](../../doc/models/component-custom-price.md) | Optional | Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. |

## Example

```ts
import {
  CreateUsage,
  IntervalUnit,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createUsage: CreateUsage = {
  quantity: 204.7,
  pricePointId: 'price_point_id4',
  memo: 'memo8',
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
};
```

