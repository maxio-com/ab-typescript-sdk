
# Bank Account Verification Request

## Structure

`BankAccountVerificationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountVerification` | [`BankAccountVerification`](../../doc/models/bank-account-verification.md) | Required | - |

## Example

```ts
import {
  BankAccountVerificationRequest,
} from '@maxio-com/advanced-billing-sdk';

const bankAccountVerificationRequest: BankAccountVerificationRequest = {
  bankAccountVerification: {
    deposit1InCents: BigInt(244),
    deposit2InCents: BigInt(6),
  },
};
```

