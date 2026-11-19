
# Update Wallet Request

## Structure

`UpdateWalletRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | [`Wallet2`](../../doc/models/wallet-2.md) | Required | - |

## Example

```ts
import { UpdateWalletRequest } from '@maxio-com/advanced-billing-sdk';

const updateWalletRequest: UpdateWalletRequest = {
  wallet: {
    name: 'name6',
  },
};
```

