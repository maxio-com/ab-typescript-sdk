
# Subscription Group Signup Failure Data

## Structure

`SubscriptionGroupSignupFailureData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payerId` | `number \| undefined` | Optional | - |
| `payerReference` | `string \| undefined` | Optional | - |
| `paymentProfileId` | `number \| undefined` | Optional | - |
| `paymentCollectionMethod` | `string \| undefined` | Optional | - |
| `payerAttributes` | [`PayerAttributes \| undefined`](../../doc/models/payer-attributes.md) | Optional | - |
| `creditCardAttributes` | [`SubscriptionGroupCreditCard \| undefined`](../../doc/models/subscription-group-credit-card.md) | Optional | - |
| `bankAccountAttributes` | [`SubscriptionGroupBankAccount \| undefined`](../../doc/models/subscription-group-bank-account.md) | Optional | - |
| `subscriptions` | [`SubscriptionGroupSignupItem[] \| undefined`](../../doc/models/subscription-group-signup-item.md) | Optional | - |

## Example

```ts
import {
  SubscriptionGroupSignupFailureData,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupSignupFailureData: SubscriptionGroupSignupFailureData = {
  payerId: 236,
  payerReference: 'payer_reference2',
  paymentProfileId: 42,
  paymentCollectionMethod: 'payment_collection_method4',
  payerAttributes: {
    firstName: 'first_name2',
    lastName: 'last_name0',
    email: 'email4',
    ccEmails: 'cc_emails2',
    organization: 'organization6',
  },
};
```

