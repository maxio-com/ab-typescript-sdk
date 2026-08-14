
# Subscription Group Signup Event Data

## Structure

`SubscriptionGroupSignupEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionGroup` | [`SubscriptionGroupSignupFailureData`](../../doc/models/subscription-group-signup-failure-data.md) | Required | - |
| `customer` | [`Customer \| null`](../../doc/models/customer.md) | Required | - |

## Example

```ts
import {
  SubscriptionGroupSignupEventData,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupSignupEventData: SubscriptionGroupSignupEventData = {
  subscriptionGroup: {
    payerId: 150,
    payerReference: 'payer_reference6',
    paymentProfileId: 128,
    paymentCollectionMethod: 'payment_collection_method8',
    payerAttributes: {
      firstName: 'first_name2',
      lastName: 'last_name0',
      email: 'email4',
      ccEmails: 'cc_emails2',
      organization: 'organization6',
    },
  },
  customer: {
    firstName: 'first_name0',
    lastName: 'last_name8',
    email: 'email6',
    ccEmails: 'cc_emails0',
    organization: 'organization6',
  },
};
```

