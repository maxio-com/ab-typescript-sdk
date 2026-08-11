
# Update Subscription Request

## Structure

`UpdateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`UpdateSubscription`](../../doc/models/update-subscription.md) | Required | - |

## Example

```ts
import { UpdateSubscriptionRequest } from '@maxio-com/advanced-billing-sdk';

const updateSubscriptionRequest: UpdateSubscriptionRequest = {
  subscription: {
    creditCardAttributes: {
      fullNumber: 'full_number2',
      expirationMonth: 'expiration_month6',
      expirationYear: 'expiration_year2',
    },
    productHandle: 'product_handle6',
    productId: 206,
    productChangeDelayed: false,
    nextProductId: 'next_product_id6',
    deferSignup: false,
    dunningCommunicationDelayTimeZone: '"Eastern Time (US & Canada)"',
  },
};
```

