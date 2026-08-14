
# Billing Manifest Item

## Structure

`BillingManifestItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionType` | [`LineItemTransactionType \| undefined`](../../doc/models/line-item-transaction-type.md) | Optional | A handle for the line item transaction type |
| `kind` | [`BillingManifestLineItemKind \| undefined`](../../doc/models/billing-manifest-line-item-kind.md) | Optional | A handle for the billing manifest line item kind |
| `amountInCents` | `bigint \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `discountAmountInCents` | `bigint \| undefined` | Optional | - |
| `taxableAmountInCents` | `bigint \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `componentHandle` | `string \| undefined` | Optional | - |
| `componentName` | `string \| undefined` | Optional | - |
| `productId` | `number \| undefined` | Optional | - |
| `productHandle` | `string \| undefined` | Optional | - |
| `productName` | `string \| undefined` | Optional | - |
| `periodRangeStart` | `string \| undefined` | Optional | - |
| `periodRangeEnd` | `string \| undefined` | Optional | - |

## Example

```ts
import {
  BillingManifestItem,
  BillingManifestLineItemKind,
  LineItemTransactionType,
} from '@maxio-com/advanced-billing-sdk';

const billingManifestItem: BillingManifestItem = {
  transactionType: LineItemTransactionType.Payment,
  kind: BillingManifestLineItemKind.Trial,
  amountInCents: BigInt(148),
  memo: 'memo0',
  discountAmountInCents: BigInt(88),
};
```

