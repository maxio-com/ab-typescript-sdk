
# Wallet Purchase Preview

A price quote for a purchase, without charging anything.

## Structure

`WalletPurchasePreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePointId` | `number` | Required | - |
| `currency` | `string` | Required | The three-letter currency code the `amount` is denominated in, matching the subscription's currency. |
| `quantity` | `string` | Required | The number of units the quote is for, as a decimal string. |
| `amount` | `string` | Required | The price for `quantity` units at this price point, as a decimal string. |

## Example

```ts
import { WalletPurchasePreview } from '@maxio-com/advanced-billing-sdk';

const walletPurchasePreview: WalletPurchasePreview = {
  pricePointId: 98,
  currency: 'USD',
  quantity: 'quantity4',
  amount: 'amount0',
};
```

