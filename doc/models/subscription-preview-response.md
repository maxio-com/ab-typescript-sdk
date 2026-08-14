
# Subscription Preview Response

## Structure

`SubscriptionPreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionPreview` | [`SubscriptionPreview`](../../doc/models/subscription-preview.md) | Required | - |

## Example

```ts
import {
  BillingManifestLineItemKind,
  LineItemTransactionType,
  SubscriptionPreviewResponse,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionPreviewResponse: SubscriptionPreviewResponse = {
  subscriptionPreview: {
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
  },
};
```

