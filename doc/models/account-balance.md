
# Account Balance

## Structure

`AccountBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceInCents` | `bigint \| undefined` | Optional | The balance in cents. |
| `automaticBalanceInCents` | `bigint \| null \| undefined` | Optional | The automatic balance in cents. |
| `remittanceBalanceInCents` | `bigint \| null \| undefined` | Optional | The remittance balance in cents. |

## Example

```ts
import { AccountBalance } from '@maxio-com/advanced-billing-sdk';

const accountBalance: AccountBalance = {
  balanceInCents: BigInt(242),
  automaticBalanceInCents: BigInt(0),
  remittanceBalanceInCents: BigInt(32),
};
```

