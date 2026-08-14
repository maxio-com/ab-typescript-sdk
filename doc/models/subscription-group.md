
# Subscription Group

## Structure

`SubscriptionGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `paymentProfile` | [`SubscriptionGroupPaymentProfile \| undefined`](../../doc/models/subscription-group-payment-profile.md) | Optional | - |
| `paymentCollectionMethod` | [`CollectionMethod \| undefined`](../../doc/models/collection-method.md) | Optional | The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. |
| `subscriptionIds` | `number[] \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |

## Example

```ts
import {
  CollectionMethod,
  SubscriptionGroup,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroup: SubscriptionGroup = {
  uid: 'uid8',
  customerId: 78,
  paymentProfile: {
    id: 44,
    firstName: 'first_name4',
    lastName: 'last_name2',
    maskedCardNumber: 'masked_card_number2',
  },
  paymentCollectionMethod: CollectionMethod.Automatic,
  subscriptionIds: [
    188,
    189,
    190
  ],
};
```

