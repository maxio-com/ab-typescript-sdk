
# Credit Account Balance Changed

## Structure

`CreditAccountBalanceChanged`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string` | Required | - |
| `serviceCreditAccountBalanceInCents` | `bigint` | Required | - |
| `serviceCreditBalanceChangeInCents` | `bigint` | Required | - |
| `currencyCode` | `string` | Required | - |
| `atTime` | `string` | Required | - |

## Example

```ts
import { CreditAccountBalanceChanged } from '@maxio-com/advanced-billing-sdk';

const creditAccountBalanceChanged: CreditAccountBalanceChanged = {
  reason: 'reason4',
  serviceCreditAccountBalanceInCents: BigInt(216),
  serviceCreditBalanceChangeInCents: BigInt(166),
  currencyCode: 'currency_code6',
  atTime: '2016-03-13T12:52:32.123Z',
};
```

