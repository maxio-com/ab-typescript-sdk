
# Created Prepayment

## Structure

`CreatedPrepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | **Constraints**: `>= 1` |
| `subscriptionId` | `number \| undefined` | Optional | **Constraints**: `>= 1` |
| `amountInCents` | `bigint \| undefined` | Optional | **Constraints**: `>= 0.01` |
| `memo` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `startingBalanceInCents` | `bigint \| undefined` | Optional | **Constraints**: `>= 0` |
| `endingBalanceInCents` | `bigint \| undefined` | Optional | - |

## Example

```ts
import { CreatedPrepayment } from '@maxio-com/advanced-billing-sdk';

const createdPrepayment: CreatedPrepayment = {
  id: BigInt(186),
  subscriptionId: 40,
  amountInCents: BigInt(240),
  memo: 'memo6',
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

