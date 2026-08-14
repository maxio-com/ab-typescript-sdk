
# Sale Rep Subscription

## Structure

`SaleRepSubscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `siteName` | `string \| undefined` | Optional | - |
| `subscriptionUrl` | `string \| undefined` | Optional | - |
| `customerName` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `mrr` | `string \| undefined` | Optional | - |
| `usage` | `string \| undefined` | Optional | - |
| `recurring` | `string \| undefined` | Optional | - |
| `lastPayment` | `string \| undefined` | Optional | - |
| `churnDate` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { SaleRepSubscription } from '@maxio-com/advanced-billing-sdk';

const saleRepSubscription: SaleRepSubscription = {
  id: 68,
  siteName: 'site_name8',
  subscriptionUrl: 'subscription_url2',
  customerName: 'customer_name8',
  createdAt: 'created_at4',
};
```

