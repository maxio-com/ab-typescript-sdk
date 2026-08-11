
# Service Credit

## Structure

`ServiceCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `amountInCents` | `bigint \| undefined` | Optional | The amount in cents of the entry |
| `endingBalanceInCents` | `bigint \| undefined` | Optional | The new balance for the credit account |
| `entryType` | [`ServiceCreditType \| undefined`](../../doc/models/service-credit-type.md) | Optional | The type of entry |
| `memo` | `string \| undefined` | Optional | The memo attached to the entry |

## Example

```ts
import {
  ServiceCredit,
  ServiceCreditType,
} from '@maxio-com/advanced-billing-sdk';

const serviceCredit: ServiceCredit = {
  id: 132,
  amountInCents: BigInt(218),
  endingBalanceInCents: BigInt(2),
  entryType: ServiceCreditType.Credit,
  memo: 'memo8',
};
```

