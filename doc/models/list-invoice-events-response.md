
# List Invoice Events Response

## Structure

`ListInvoiceEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `events` | [`InvoiceEvent[] \| undefined`](../../doc/models/invoice-event.md) | Optional | - |
| `page` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `totalPages` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "events": [
    {
      "id": 68,
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
  ],
  "page": 184,
  "per_page": 96,
  "total_pages": 194
}
```

