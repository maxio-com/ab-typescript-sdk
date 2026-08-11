
# List Subscription Group Prepayment Response

## Structure

`ListSubscriptionGroupPrepaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayments` | [`ListSubscriptionGroupPrepayment[]`](../../doc/models/list-subscription-group-prepayment.md) | Required | - |

## Example

```ts
import {
  ListSubscriptionGroupPrepaymentResponse,
} from '@maxio-com/advanced-billing-sdk';

const listSubscriptionGroupPrepaymentResponse: ListSubscriptionGroupPrepaymentResponse = {
  prepayments: [
    {
      prepayment: {
        id: 38,
        subscriptionGroupUid: 'subscription_group_uid2',
        amountInCents: BigInt(124),
        remainingAmountInCents: BigInt(182),
        details: 'details8',
      },
    }
  ],
};
```

