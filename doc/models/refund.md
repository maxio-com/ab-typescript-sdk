
# Refund

## Structure

`Refund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `string \| undefined` | Optional | The amount to be refunded in decimal format as a string. Example: "10.50". Must not exceed the remaining refundable balance of the payment. |
| `memo` | `string \| undefined` | Optional | A description that will be attached to the refund |
| `paymentId` | `number \| undefined` | Optional | The ID of the payment to be refunded |
| `external` | `boolean \| undefined` | Optional | Flag that marks refund as external (no money is returned to the customer). Defaults to `false`. |
| `applyCredit` | `boolean \| undefined` | Optional | If set to true, creates credit and applies it to an invoice. Defaults to `false`. |
| `voidInvoice` | `boolean \| undefined` | Optional | If `apply_credit` set to false and refunding full amount, if `void_invoice` set to true, invoice will be voided after refund. Defaults to `false`. |
| `segmentUids` | [`RefundSegmentUids \| undefined`](../../doc/models/containers/refund-segment-uids.md) | Optional | This is a container for one-of cases. |

## Example (as JSON)

```json
{
  "amount": "amount8",
  "memo": "memo0",
  "payment_id": 130,
  "external": false,
  "apply_credit": false
}
```

