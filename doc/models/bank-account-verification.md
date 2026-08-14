
# Bank Account Verification

## Structure

`BankAccountVerification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deposit1InCents` | `bigint \| undefined` | Optional | - |
| `deposit2InCents` | `bigint \| undefined` | Optional | - |

## Example

```ts
import { BankAccountVerification } from '@maxio-com/advanced-billing-sdk';

const bankAccountVerification: BankAccountVerification = {
  deposit1InCents: BigInt(248),
  deposit2InCents: BigInt(10),
};
```

