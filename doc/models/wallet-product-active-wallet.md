
# Wallet Product Active Wallet

One active wallet drawing on this Wallet Product.

## Structure

`WalletProductActiveWallet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The Advanced Billing id of the wallet. |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `companyName` | `string \| undefined` | Optional | The owning customer's organization name, falling back to their full name, then to `"Customer #<id>"`. `"Customer"` (with no id) when the wallet's subscription has no customer at all. |
| `purchaseMechanism` | `string \| null \| undefined` | Optional | See the same field on [Wallet Product Usage Template](../../doc/models/wallet-product-usage-template.md). The same caveats apply. |
| `pricePointName` | `string \| null \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `active` | `boolean \| undefined` | Optional | `false` when the wallet's Feature is archived. |

## Example

```ts
import { WalletProductActiveWallet } from '@maxio-com/advanced-billing-sdk';

const walletProductActiveWallet: WalletProductActiveWallet = {
  id: 214,
  subscriptionId: 68,
  companyName: 'company_name8',
  purchaseMechanism: 'purchase_mechanism2',
  pricePointName: 'price_point_name4',
};
```

