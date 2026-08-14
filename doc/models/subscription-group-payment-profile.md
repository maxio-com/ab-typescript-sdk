
# Subscription Group Payment Profile

## Structure

`SubscriptionGroupPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `maskedCardNumber` | `string \| undefined` | Optional | - |

## Example

```ts
import {
  SubscriptionGroupPaymentProfile,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupPaymentProfile: SubscriptionGroupPaymentProfile = {
  id: 246,
  firstName: 'first_name6',
  lastName: 'last_name4',
  maskedCardNumber: 'masked_card_number4',
};
```

