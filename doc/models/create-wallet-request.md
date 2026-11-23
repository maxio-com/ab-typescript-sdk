
# Create Wallet Request

## Structure

`CreateWalletRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | [`Wallet1`](../../doc/models/wallet-1.md) | Required | - |

## Example

```ts
import {
  CreateWalletRequest,
  WalletHardStopOverflow,
} from '@maxio-com/advanced-billing-sdk';

const createWalletRequest: CreateWalletRequest = {
  wallet: {
    subscriptionId: 94,
    walletProductId: 154,
    name: 'name6',
    depletionPolicy: 'depletion_policy4',
    hardStopOverflow: WalletHardStopOverflow.Discard,
    meterId: 146,
    conversionRate: 'String9',
    initialBalance: 'String1',
  },
};
```

