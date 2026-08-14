
# Subscription Group Signup Request

## Structure

`SubscriptionGroupSignupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionGroup` | [`SubscriptionGroupSignup`](../../doc/models/subscription-group-signup.md) | Required | - |

## Example

```ts
import {
  CollectionMethod,
  SubscriptionGroupSignupRequest,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupSignupRequest: SubscriptionGroupSignupRequest = {
  subscriptionGroup: {
    subscriptions: [
      {
        productHandle: 'product_handle8',
        productId: 144,
        productPricePointId: 68,
        productPricePointHandle: 'product_price_point_handle4',
        offerId: 40,
        metafields: {
          'custom_field_name_1': 'custom_field_value_1',
          'custom_field_name_2': 'custom_field_value_2'
        },
      }
    ],
    paymentProfileId: 128,
    payerId: 150,
    payerReference: 'payer_reference6',
    paymentCollectionMethod: CollectionMethod.Prepaid,
    payerAttributes: {
      firstName: 'first_name2',
      lastName: 'last_name0',
      email: 'email4',
      ccEmails: 'cc_emails2',
      organization: 'organization6',
    },
  },
};
```

