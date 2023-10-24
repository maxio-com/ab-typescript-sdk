
# Create Multi Invoice Payment

## Structure

`CreateMultiInvoicePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memo` | `string \| undefined` | Optional | A description to be attached to the payment. |
| `details` | `string \| undefined` | Optional | Additional information related to the payment method (eg. Check #). |
| `method` | [`InvoicePaymentMethodType \| undefined`](../../doc/models/invoice-payment-method-type.md) | Optional | The type of payment method used.<br>**Default**: `InvoicePaymentMethodType.Other` |
| `amount` | [`CreateMultiInvoicePaymentAmount`](../../doc/models/containers/create-multi-invoice-payment-amount.md) | Required | This is a container for one-of cases. |
| `receivedOn` | `string \| undefined` | Optional | Date reflecting when the payment was received from a customer. Must be in the past. |
| `applications` | [`CreateInvoicePaymentApplication[]`](../../doc/models/create-invoice-payment-application.md) | Required | - |

## Example (as JSON)

```json
{
  "method": "other",
  "amount": "String7",
  "applications": [
    {
      "invoice_uid": "invoice_uid8",
      "amount": "amount0"
    }
  ],
  "memo": "memo8",
  "details": "details4",
  "received_on": "received_on6"
}
```

