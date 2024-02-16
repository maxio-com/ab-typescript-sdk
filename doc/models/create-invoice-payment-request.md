
# Create Invoice Payment Request

## Structure

`CreateInvoicePaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payment` | [`CreateInvoicePayment`](../../doc/models/create-invoice-payment.md) | Required | - |
| `type` | [`InvoicePaymentType \| undefined`](../../doc/models/invoice-payment-type.md) | Optional | The type of payment to be applied to an Invoice. Defaults to external. |

## Example (as JSON)

```json
{
  "payment": {
    "amount": "String9",
    "memo": "memo0",
    "method": "ach",
    "details": "details6",
    "payment_profile_id": 42
  },
  "type": "external"
}
```

