
# Bank Account Response

## Structure

`BankAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentProfile` | [`BankAccountPaymentProfile`](../../doc/models/bank-account-payment-profile.md) | Required | - |

## Example

```ts
import {
  BankAccountResponse,
  BankAccountVault,
  PaymentType,
} from '@maxio-com/advanced-billing-sdk';

const bankAccountResponse: BankAccountResponse = {
  paymentProfile: {
    paymentType: PaymentType.BankAccount,
    id: 44,
    firstName: 'first_name4',
    lastName: 'last_name2',
    customerId: 82,
    currentVault: BankAccountVault.Authorizenet,
    verified: false,
  },
};
```

