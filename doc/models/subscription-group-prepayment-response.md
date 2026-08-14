
# Subscription Group Prepayment Response

## Structure

`SubscriptionGroupPrepaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `amountInCents` | `bigint \| undefined` | Optional | The amount in cents of the entry. |
| `endingBalanceInCents` | `bigint \| undefined` | Optional | The ending balance in cents of the account. |
| `entryType` | [`ServiceCreditType \| undefined`](../../doc/models/service-credit-type.md) | Optional | The type of entry |
| `memo` | `string \| null \| undefined` | Optional | A memo attached to the entry. |

## Example

```ts
import {
  ServiceCreditType,
  SubscriptionGroupPrepaymentResponse,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupPrepaymentResponse: SubscriptionGroupPrepaymentResponse = {
  id: 32,
  amountInCents: BigInt(138),
  endingBalanceInCents: BigInt(158),
  entryType: ServiceCreditType.Credit,
  memo: 'memo2',
};
```

