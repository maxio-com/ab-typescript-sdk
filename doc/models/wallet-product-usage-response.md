
# Wallet Product Usage Response

## Structure

`WalletProductUsageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletTemplates` | [`WalletProductUsageTemplate[]`](../../doc/models/wallet-product-usage-template.md) | Required | Wallet templates billing through this product at its default price point. |
| `pricePointOverrides` | [`WalletProductUsageTemplate[]`](../../doc/models/wallet-product-usage-template.md) | Required | Wallet templates billing through this product at a price point other than the default. |
| `activeWallets` | [`ActiveWallets`](../../doc/models/active-wallets.md) | Required | - |

## Example

```ts
import { WalletProductUsageResponse } from '@maxio-com/advanced-billing-sdk';

const walletProductUsageResponse: WalletProductUsageResponse = {
  walletTemplates: [
    {
      planName: 'plan_name4',
      walletTemplateName: 'wallet_template_name2',
      unitName: 'unit_name4',
      purchaseMechanism: 'purchase_mechanism2',
      pricePointName: 'price_point_name4',
    }
  ],
  pricePointOverrides: [
    {
      planName: 'plan_name0',
      walletTemplateName: 'wallet_template_name2',
      unitName: 'unit_name0',
      purchaseMechanism: 'purchase_mechanism8',
      pricePointName: 'price_point_name8',
    }
  ],
  activeWallets: {
    total: 164,
    sample: [
      {
        id: 180,
        subscriptionId: 34,
        companyName: 'company_name4',
        purchaseMechanism: 'purchase_mechanism8',
        pricePointName: 'price_point_name8',
      }
    ],
  },
};
```

