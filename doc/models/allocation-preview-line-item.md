
# Allocation Preview Line Item

## Structure

`AllocationPreviewLineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionType` | [`LineItemTransactionType \| undefined`](../../doc/models/line-item-transaction-type.md) | Optional | A handle for the line item transaction type |
| `kind` | [`AllocationPreviewLineItemKind \| undefined`](../../doc/models/allocation-preview-line-item-kind.md) | Optional | A handle for the line item kind for allocation preview |
| `amountInCents` | `bigint \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `discountAmountInCents` | `bigint \| undefined` | Optional | - |
| `taxableAmountInCents` | `bigint \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `componentHandle` | `string \| undefined` | Optional | - |
| `direction` | [`AllocationPreviewDirection \| undefined`](../../doc/models/allocation-preview-direction.md) | Optional | Visible when using Fine-grained Component Control |

## Example (as JSON)

```json
{
  "transaction_type": "credit",
  "kind": "quantity_based_component",
  "amount_in_cents": 24,
  "memo": "memo6",
  "discount_amount_in_cents": 172
}
```

