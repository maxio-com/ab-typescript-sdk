
# Apply Payment Event Data

Example schema for an `apply_payment` event

## Structure

`ApplyPaymentEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memo` | `string \| undefined` | Optional | The payment memo |
| `originalAmount` | `string \| undefined` | Optional | The full, original amount of the payment transaction as a string in full units. Incoming payments can be split amongst several invoices, which will result in a `applied_amount` less than the `original_amount`. Example: A $100.99 payment, of which $40.11 is applied to this invoice, will have an `original_amount` of `"100.99"`. |
| `appliedAmount` | `string \| undefined` | Optional | The amount of the payment applied to this invoice. Incoming payments can be split amongst several invoices, which will result in a `applied_amount` less than the `original_amount`. Example: A $100.99 payment, of which $40.11 is applied to this invoice, will have an `applied_amount` of `"40.11"`. |
| `transactionTime` | `string \| undefined` | Optional | The time the payment was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |
| `paymentMethod` | [`ApplyPaymentEventDataPaymentMethod \| undefined`](../../doc/models/containers/apply-payment-event-data-payment-method.md) | Optional | This is a container for one-of cases. |
| `transactionId` | `number \| undefined` | Optional | The Chargify id of the original payment |

## Example (as JSON)

```json
{
  "memo": "memo8",
  "original_amount": "original_amount8",
  "applied_amount": "applied_amount4",
  "transaction_time": "2016-03-13T12:52:32.123Z",
  "payment_method": {
    "type": "type4"
  }
}
```

