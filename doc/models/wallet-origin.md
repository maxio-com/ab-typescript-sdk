
# Wallet Origin

How the wallet came to exist. `manual` for a wallet created directly with [Create Wallet](../../doc/controllers/wallets.md#create-wallet). `feature` for a wallet auto-provisioned because a subscription resolved a usage-limit entitlement whose Feature has `wallet_behavior` configured.

## Enumeration

`WalletOrigin`

## Fields

| Name |
|  --- |
| `Manual` |
| `Feature` |

## Example

```ts
import { WalletOrigin } from '@maxio-com/advanced-billing-sdk';

const walletOrigin = WalletOrigin.Manual;
```

