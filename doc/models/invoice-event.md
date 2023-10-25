
# Invoice Event

## Structure

`InvoiceEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `eventType` | [`InvoiceEventType \| undefined`](../../doc/models/invoice-event-type.md) | Optional | Invoice Event Type |
| `eventData` | [`InvoiceEventEventData \| undefined`](../../doc/models/containers/invoice-event-event-data.md) | Optional | This is a container for any-of cases. |
| `timestamp` | `string \| undefined` | Optional | - |
| `invoice` | [`Invoice \| undefined`](../../doc/models/invoice.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": 78,
  "event_type": "remove_payment",
  "event_data": {
    "uid": "uid2",
    "credit_note_number": "credit_note_number4",
    "credit_note_uid": "credit_note_uid4",
    "original_amount": "original_amount6",
    "applied_amount": "applied_amount6"
  },
  "timestamp": "timestamp8",
  "invoice": {
    "id": 166,
    "uid": "uid6",
    "site_id": 92,
    "customer_id": 204,
    "subscription_id": 20
  }
}
```

