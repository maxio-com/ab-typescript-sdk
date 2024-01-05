
# Renewal Preview Line Item

## Structure

`RenewalPreviewLineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionType` | [`LineItemTransactionType \| undefined`](../../doc/models/line-item-transaction-type.md) | Optional | A handle for the line item transaction type |
| `kind` | [`LineItemKind \| undefined`](../../doc/models/line-item-kind.md) | Optional | A handle for the line item kind |
| `amountInCents` | `bigint \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `discountAmountInCents` | `bigint \| undefined` | Optional | - |
| `taxableAmountInCents` | `bigint \| undefined` | Optional | - |
| `productId` | `number \| undefined` | Optional | - |
| `productName` | `string \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `componentHandle` | `string \| undefined` | Optional | - |
| `componentName` | `string \| undefined` | Optional | - |
| `productHandle` | `string \| undefined` | Optional | - |
| `periodRangeStart` | `string \| undefined` | Optional | - |
| `periodRangeEnd` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "transaction_type": "charge",
  "kind": "prepaid_usage_component",
  "amount_in_cents": 154,
  "memo": "memo0",
  "discount_amount_in_cents": 214
}
```

