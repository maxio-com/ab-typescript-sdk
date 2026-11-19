
# Subscription Group Item

## Structure

`SubscriptionGroupItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `reference` | `string \| null \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | The ID of the customer the subscription belongs to. This is the payer unless the signup request named another customer for the subscription. |
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
  customerId: 64,
  productId: 32,
  productHandle: 'product_handle8',
};
```

