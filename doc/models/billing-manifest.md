
# Billing Manifest

## Structure

`BillingManifest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lineItems` | [`BillingManifestItem[] \| undefined`](../../doc/models/billing-manifest-item.md) | Optional | - |
| `totalInCents` | `bigint \| undefined` | Optional | - |
| `totalDiscountInCents` | `bigint \| undefined` | Optional | - |
| `totalTaxInCents` | `bigint \| undefined` | Optional | - |
| `subtotalInCents` | `bigint \| undefined` | Optional | - |
| `startDate` | `string \| null \| undefined` | Optional | - |
| `endDate` | `string \| null \| undefined` | Optional | - |
| `periodType` | `string \| null \| undefined` | Optional | - |
| `existingBalanceInCents` | `bigint \| undefined` | Optional | - |

## Example

```ts
import {
  BillingManifest,
  BillingManifestLineItemKind,
  LineItemTransactionType,
} from '@maxio-com/advanced-billing-sdk';

const billingManifest: BillingManifest = {
  lineItems: [
    {
      transactionType: LineItemTransactionType.Credit,
      kind: BillingManifestLineItemKind.Component,
      amountInCents: BigInt(24),
      memo: 'memo2',
      discountAmountInCents: BigInt(172),
    }
  ],
  totalInCents: BigInt(96),
  totalDiscountInCents: BigInt(174),
  totalTaxInCents: BigInt(76),
  subtotalInCents: BigInt(208),
};
```

