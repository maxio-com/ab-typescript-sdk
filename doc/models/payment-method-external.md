
# Payment Method External

## Structure

`PaymentMethodExternal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `details` | `string \| null` | Required | - |
| `kind` | `string` | Required | - |
| `memo` | `string \| null` | Required | - |
| `type` | [`InvoiceEventPaymentMethod`](../../doc/models/invoice-event-payment-method.md) | Required | - |

## Example (as JSON)

```json
{
  "details": "details4",
  "kind": "kind2",
  "memo": "memo8",
  "type": "bank_account"
}
```

