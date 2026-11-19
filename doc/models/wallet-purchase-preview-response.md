
# Wallet Purchase Preview Response

## Structure

`WalletPurchasePreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletPurchasePreviews` | [`WalletPurchasePreview[]`](../../doc/models/wallet-purchase-preview.md) | Required | - |

## Example

```ts
import {
  WalletPurchasePreviewResponse,
} from '@maxio-com/advanced-billing-sdk';

const walletPurchasePreviewResponse: WalletPurchasePreviewResponse = {
  walletPurchasePreviews: [
    {
      pricePointId: 126,
      currency: 'USD',
      quantity: 'quantity6',
      amount: 'amount2',
    }
  ],
};
```

