
# Wallet Purchase Result Response

## Structure

`WalletPurchaseResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletPurchases` | [`WalletPurchase[]`](../../doc/models/wallet-purchase.md) | Required | - |
| `balance` | `string` | Required | The wallet's new balance, as a decimal string. |

## Example

```ts
import {
  WalletPurchaseResultResponse,
} from '@maxio-com/advanced-billing-sdk';

const walletPurchaseResultResponse: WalletPurchaseResultResponse = {
  walletPurchases: [
    {
      id: 244,
      pricePointId: 134,
      invoiceUid: 'invoice_uid0',
      quantity: 'quantity6',
      expiresAt: '2016-03-13T12:52:32.123Z',
    }
  ],
  balance: 'balance6',
};
```

