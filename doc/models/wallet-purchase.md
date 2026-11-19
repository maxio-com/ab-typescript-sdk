
# Wallet Purchase

A completed unit purchase.

## Structure

`WalletPurchase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The id of the grant this purchase created. When the wallet was overdrawn by at least the purchased quantity, the units repay the debt and the grant is still created, with `remaining` of `0` and `original` equal to the purchased quantity. |
| `pricePointId` | `number` | Required | The price point the purchase was priced at. |
| `invoiceUid` | `string` | Required | The uid of the invoice created to collect payment for this purchase. |
| `quantity` | `string` | Required | The number of units purchased, as a decimal string. |
| `expiresAt` | `string \| null` | Required | When the purchased units expire, following the funding entitlement's grant expiration policy. `null` when the wallet has no funding entitlement or its entitlements disagree on an expiration policy. |

## Example

```ts
import { WalletPurchase } from '@maxio-com/advanced-billing-sdk';

const walletPurchase: WalletPurchase = {
  id: 218,
  pricePointId: 96,
  invoiceUid: 'invoice_uid0',
  quantity: 'quantity6',
  expiresAt: '2016-03-13T12:52:32.123Z',
};
```

