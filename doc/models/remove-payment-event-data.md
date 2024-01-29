
# Remove Payment Event Data

Example schema for an `remove_payment` event

## Structure

`RemovePaymentEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `number` | Required | Transaction ID of the original payment that was removed |
| `memo` | `string` | Required | Memo of the original payment |
| `originalAmount` | `string \| undefined` | Optional | Full amount of the original payment |
| `appliedAmount` | `string` | Required | Applied amount of the original payment |
| `transactionTime` | `string` | Required | Transaction time of the original payment, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |
| `paymentMethod` | [`RemovePaymentEventDataPaymentMethod`](../../doc/models/containers/remove-payment-event-data-payment-method.md) | Required | This is a container for any-of cases. |
| `prepayment` | `boolean` | Required | The flag that shows whether the original payment was a prepayment or not |

## Example (as JSON)

```json
{
  "transaction_id": 180,
  "memo": "memo0",
  "applied_amount": "applied_amount2",
  "transaction_time": "2016-03-13T12:52:32.123Z",
  "payment_method": {
    "type": "apple_pay"
  },
  "prepayment": false,
  "original_amount": "original_amount0"
}
```

