
# Invoice Payment

## Structure

`InvoicePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionTime` | `string \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `originalAmount` | `string \| undefined` | Optional | - |
| `appliedAmount` | `string \| undefined` | Optional | - |
| `paymentMethod` | [`InvoicePaymentMethod \| undefined`](../../doc/models/invoice-payment-method.md) | Optional | - |
| `transactionId` | `number \| undefined` | Optional | - |
| `prepayment` | `boolean \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |
| `gatewayUsed` | `string \| undefined` | Optional | - |
| `gatewayTransactionId` | `string \| null \| undefined` | Optional | The transaction ID for the payment as returned from the payment gateway |
| `receivedOn` | `string \| null \| undefined` | Optional | Date reflecting when the payment was received from a customer. Must be in the past. Applicable only to<br>`external` payments. |
| `uid` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "transaction_time": "2016-03-13T12:52:32.123Z",
  "memo": "memo6",
  "original_amount": "original_amount6",
  "applied_amount": "applied_amount6",
  "payment_method": {
    "details": "details0",
    "kind": "kind8",
    "memo": "memo4",
    "type": "type0",
    "card_brand": "card_brand6"
  }
}
```

