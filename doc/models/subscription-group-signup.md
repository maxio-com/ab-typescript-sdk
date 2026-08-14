
# Subscription Group Signup

## Structure

`SubscriptionGroupSignup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentProfileId` | `number \| undefined` | Optional | - |
| `payerId` | `number \| undefined` | Optional | - |
| `payerReference` | `string \| undefined` | Optional | - |
| `paymentCollectionMethod` | [`CollectionMethod \| undefined`](../../doc/models/collection-method.md) | Optional | The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. |
| `payerAttributes` | [`PayerAttributes \| undefined`](../../doc/models/payer-attributes.md) | Optional | - |
| `creditCardAttributes` | [`SubscriptionGroupCreditCard \| undefined`](../../doc/models/subscription-group-credit-card.md) | Optional | - |
| `bankAccountAttributes` | [`SubscriptionGroupBankAccount \| undefined`](../../doc/models/subscription-group-bank-account.md) | Optional | - |
| `subscriptions` | [`SubscriptionGroupSignupItem[]`](../../doc/models/subscription-group-signup-item.md) | Required | - |

## Example

```ts
import {
  CollectionMethod,
  SubscriptionGroupSignup,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupSignup: SubscriptionGroupSignup = {
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
  paymentProfileId: 124,
  payerId: 146,
  payerReference: 'payer_reference0',
  paymentCollectionMethod: CollectionMethod.Prepaid,
  payerAttributes: {
    firstName: 'first_name2',
    lastName: 'last_name0',
    email: 'email4',
    ccEmails: 'cc_emails2',
    organization: 'organization6',
  },
};
```

