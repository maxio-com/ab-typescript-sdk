
# Create Invoice Payment

## Structure

`CreateInvoicePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`CreateInvoicePaymentAmount \| undefined`](../../doc/models/containers/create-invoice-payment-amount.md) | Optional | This is a container for one-of cases. |
| `memo` | `string \| undefined` | Optional | A description to be attached to the payment. |
| `method` | [`InvoicePaymentMethodType \| undefined`](../../doc/models/invoice-payment-method-type.md) | Optional | The type of payment method used.<br>**Default**: `InvoicePaymentMethodType.Other` |
| `details` | `string \| undefined` | Optional | Additional information related to the payment method (eg. Check #) |

## Example (as JSON)

```json
{
  "method": "other",
  "amount": "String9",
  "memo": "memo0",
  "details": "details6"
}
```

