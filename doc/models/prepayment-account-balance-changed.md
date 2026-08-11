
# Prepayment Account Balance Changed

## Structure

`PrepaymentAccountBalanceChanged`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string` | Required | - |
| `prepaymentAccountBalanceInCents` | `bigint` | Required | - |
| `prepaymentBalanceChangeInCents` | `bigint` | Required | - |
| `currencyCode` | `string` | Required | - |

## Example

```ts
import {
  PrepaymentAccountBalanceChanged,
} from '@maxio-com/advanced-billing-sdk';

const prepaymentAccountBalanceChanged: PrepaymentAccountBalanceChanged = {
  reason: 'reason8',
  prepaymentAccountBalanceInCents: BigInt(134),
  prepaymentBalanceChangeInCents: BigInt(158),
  currencyCode: 'currency_code8',
};
```

