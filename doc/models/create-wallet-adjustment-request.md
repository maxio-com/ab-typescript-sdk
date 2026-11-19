
# Create Wallet Adjustment Request

A signed correction to a specific grant's balance, or to an overdraft entry's usage, intended for support and ops use.

## Structure

`CreateWalletAdjustmentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adjustment` | [`Adjustment`](../../doc/models/adjustment.md) | Required | - |

## Example

```ts
import {
  CreateWalletAdjustmentRequest,
} from '@maxio-com/advanced-billing-sdk';

const createWalletAdjustmentRequest: CreateWalletAdjustmentRequest = {
  adjustment: {
    amount: 'String7',
    reason: 'reason0',
    grantId: 104,
    sourceTransactionId: 126,
    expectedRemaining: 'expected_remaining6',
    expectedSourceCorrections: 'expected_source_corrections8',
  },
};
```

