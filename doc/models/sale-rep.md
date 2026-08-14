
# Sale Rep

## Structure

`SaleRep`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `fullName` | `string \| undefined` | Optional | - |
| `subscriptionsCount` | `number \| undefined` | Optional | - |
| `testMode` | `boolean \| undefined` | Optional | - |
| `subscriptions` | [`SaleRepSubscription[] \| undefined`](../../doc/models/sale-rep-subscription.md) | Optional | - |

## Example

```ts
import { SaleRep } from '@maxio-com/advanced-billing-sdk';

const saleRep: SaleRep = {
  id: 78,
  fullName: 'full_name0',
  subscriptionsCount: 102,
  testMode: false,
  subscriptions: [
    {
      id: 202,
      siteName: 'site_name8',
      subscriptionUrl: 'subscription_url2',
      customerName: 'customer_name8',
      createdAt: 'created_at4',
    },
    {
      id: 202,
      siteName: 'site_name8',
      subscriptionUrl: 'subscription_url2',
      customerName: 'customer_name8',
      createdAt: 'created_at4',
    },
    {
      id: 202,
      siteName: 'site_name8',
      subscriptionUrl: 'subscription_url2',
      customerName: 'customer_name8',
      createdAt: 'created_at4',
    }
  ],
};
```

