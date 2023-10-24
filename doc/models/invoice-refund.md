
# Invoice Refund

## Structure

`InvoiceRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `number \| undefined` | Optional | - |
| `paymentId` | `number \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `originalAmount` | `string \| undefined` | Optional | - |
| `appliedAmount` | `string \| undefined` | Optional | - |
| `gatewayTransactionId` | `string \| null \| undefined` | Optional | The transaction ID for the refund as returned from the payment gateway |

## Example (as JSON)

```json
{
  "transaction_id": 172,
  "payment_id": 42,
  "memo": "memo6",
  "original_amount": "original_amount6",
  "applied_amount": "applied_amount6"
}
```

