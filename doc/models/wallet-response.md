
# Wallet Response

## Structure

`WalletResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | [`Wallet`](../../doc/models/wallet.md) | Required | A balance, denominated in the unit of a Wallet Product, owned by a subscription. Grants and recurring funding schedules are embedded so a single read shows the full balance breakdown. |

## Example

```ts
import { OwnerType, WalletResponse } from '@maxio-com/advanced-billing-sdk';

const walletResponse: WalletResponse = {
  wallet: {
    id: 240,
    ownerType: OwnerType.Subscription,
    ownerId: 60,
    name: 'name6',
    walletProductId: 232,
    unit: 'tokens',
    balance: '150.0',
    postedBalance: '150.0',
    depletionPolicy: 'hard_stop',
  },
};
```

