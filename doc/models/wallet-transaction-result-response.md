
# Wallet Transaction Result Response

Returned by [Create Wallet Transaction](../../doc/controllers/wallet-transactions.md#create-wallet-transaction). `wallet_transactions` and `balance` are always present. `requested_amount`, `drained_amount`, and `rejected_amount` are present only when the request's `kind` was `debit`.

## Structure

`WalletTransactionResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletTransactions` | [`WalletTransaction[]`](../../doc/models/wallet-transaction.md) | Required | - |
| `requestedAmount` | `string \| undefined` | Optional | `kind: debit` only. The amount that was requested, as a decimal string. |
| `drainedAmount` | `string \| undefined` | Optional | `kind: debit` only. The amount actually drained from the wallet's grants, as a decimal string. |
| `rejectedAmount` | `string \| undefined` | Optional | `kind: debit` only, as a decimal string. Under `hard_stop_overflow: discard`, this is the requested amount minus what the wallet could cover (`"0.0"` on a full drain). Always `"0.0"` under `allow_negative`; nothing is rejected, and the balance goes negative instead. |
| `balance` | `string` | Required | The wallet's new balance, as a decimal string. |

## Example

```ts
import {
  WalletTransactionResultResponse,
} from '@maxio-com/advanced-billing-sdk';

const walletTransactionResultResponse: WalletTransactionResultResponse = {
  walletTransactions: [
    {
      id: 140,
      walletId: 244,
      kind: 'grant',
      amount: '-30.0',
      grantId: 160,
    }
  ],
  balance: 'balance0',
  requestedAmount: 'requested_amount8',
  drainedAmount: 'drained_amount8',
  rejectedAmount: 'rejected_amount4',
};
```

