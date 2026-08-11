
# Subscription Preview

## Structure

`SubscriptionPreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentBillingManifest` | [`BillingManifest \| undefined`](../../doc/models/billing-manifest.md) | Optional | - |
| `nextBillingManifest` | [`BillingManifest \| undefined`](../../doc/models/billing-manifest.md) | Optional | - |

## Example

```ts
import {
  BillingManifestLineItemKind,
  LineItemTransactionType,
  SubscriptionPreview,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionPreview: SubscriptionPreview = {
  currentBillingManifest: {
    lineItems: [
      {
        transactionType: LineItemTransactionType.Credit,
        kind: BillingManifestLineItemKind.Component,
        amountInCents: BigInt(24),
        memo: 'memo2',
        discountAmountInCents: BigInt(172),
      }
    ],
    totalInCents: BigInt(38),
    totalDiscountInCents: BigInt(24),
    totalTaxInCents: BigInt(18),
    subtotalInCents: BigInt(150),
  },
  nextBillingManifest: {
    lineItems: [
      {
        transactionType: LineItemTransactionType.Credit,
        kind: BillingManifestLineItemKind.Component,
        amountInCents: BigInt(24),
        memo: 'memo2',
        discountAmountInCents: BigInt(172),
      },
      {
        transactionType: LineItemTransactionType.Credit,
        kind: BillingManifestLineItemKind.Component,
        amountInCents: BigInt(24),
        memo: 'memo2',
        discountAmountInCents: BigInt(172),
      },
      {
        transactionType: LineItemTransactionType.Credit,
        kind: BillingManifestLineItemKind.Component,
        amountInCents: BigInt(24),
        memo: 'memo2',
        discountAmountInCents: BigInt(172),
      }
    ],
    totalInCents: BigInt(62),
    totalDiscountInCents: BigInt(208),
    totalTaxInCents: BigInt(42),
    subtotalInCents: BigInt(174),
  },
};
```

