
# Invoice Event

## Structure

`InvoiceEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `eventType` | [`InvoiceEventTypeEnum \| undefined`](../../doc/models/invoice-event-type-enum.md) | Optional | Invoice Event Type |
| `eventData` | [`InvoiceEventEventData \| undefined`](../../doc/models/containers/invoice-event-event-data.md) | Optional | This is a container for any-of cases. |
| `timestamp` | `string \| undefined` | Optional | - |
| `invoice` | [`Invoice \| undefined`](../../doc/models/invoice.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": 78,
  "event_type": "issue_invoice",
  "event_data": {
    "memo": "memo8",
    "original_amount": "original_amount8",
    "applied_amount": "applied_amount4",
    "transaction_time": "transaction_time6",
    "payment_method": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "timestamp": "timestamp8",
  "invoice": {
    "uid": "uid6",
    "site_id": 92,
    "customer_id": 204,
    "subscription_id": 20,
    "number": "number6"
  }
}
```

