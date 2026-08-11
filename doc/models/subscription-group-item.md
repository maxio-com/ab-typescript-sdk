
# Subscription Group Item

## Structure

`SubscriptionGroupItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `reference` | `string \| null \| undefined` | Optional | - |
| `productId` | `number \| undefined` | Optional | - |
| `productHandle` | `string \| null \| undefined` | Optional | - |
| `productPricePointId` | `number \| undefined` | Optional | - |
| `productPricePointHandle` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `couponCode` | `string \| null \| undefined` | Optional | - |
| `totalRevenueInCents` | `bigint \| undefined` | Optional | - |
| `balanceInCents` | `bigint \| undefined` | Optional | - |

## Example

```ts
import { SubscriptionGroupItem } from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupItem: SubscriptionGroupItem = {
  id: 26,
  reference: 'reference4',
  productId: 32,
  productHandle: 'product_handle8',
  productPricePointId: 148,
};
```

