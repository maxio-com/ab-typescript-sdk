
# Wallet Product Usage Template

One wallet template billing through this Wallet Product, joined to the Feature and plan/component that assigns it, when there is one.

## Structure

`WalletProductUsageTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planName` | `string \| null \| undefined` | Optional | The name of the product or component the Feature is assigned to. `null` when the wallet template has no assigning Feature. |
| `walletTemplateName` | `string \| null \| undefined` | Optional | The label set in `wallet_behavior.name` on the Feature, or the standalone wallet's own `name`. |
| `unitName` | `string \| undefined` | Optional | - |
| `purchaseMechanism` | `string \| null \| undefined` | Optional | A best-effort label for how this wallet is expected to be replenished. Currently reports `"Overage"` when the wallet template allows a negative balance, and `null` otherwise; there's no persisted field yet distinguishing, for example, an intended "Auto top-up" from "Purchase more" setup. Treat this as informational, not a stable enum. |
| `pricePointName` | `string \| null \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `active` | `boolean \| undefined` | Optional | `false` when the assigning Feature is archived. |
| `featureTemplateId` | `number \| null \| undefined` | Optional | - |
| `featureTemplateName` | `string \| null \| undefined` | Optional | - |
| `pricePointOverride` | `boolean \| undefined` | Optional | `true` when this wallet template is priced at a price point other than the Wallet Product's default. |

## Example

```ts
import { WalletProductUsageTemplate } from '@maxio-com/advanced-billing-sdk';

const walletProductUsageTemplate: WalletProductUsageTemplate = {
  planName: 'plan_name0',
  walletTemplateName: 'wallet_template_name8',
  unitName: 'unit_name0',
  purchaseMechanism: 'purchase_mechanism8',
  pricePointName: 'price_point_name8',
};
```

