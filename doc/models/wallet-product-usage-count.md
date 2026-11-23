
# Wallet Product Usage Count

A rollup of what's using this Wallet Product, for the catalog listing.

## Structure

`WalletProductUsageCount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletConfigurations` | `number` | Required | Number of wallet templates billing through this product, whether or not any wallet has been created from them yet. |
| `activeWallets` | `number` | Required | Number of active (non-archived) wallets currently denominated by this product. |

## Example

```ts
import { WalletProductUsageCount } from '@maxio-com/advanced-billing-sdk';

const walletProductUsageCount: WalletProductUsageCount = {
  walletConfigurations: 154,
  activeWallets: 72,
};
```

