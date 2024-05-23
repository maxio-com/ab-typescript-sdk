
# Invoice Event

## Structure

`InvoiceEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `timestamp` | `string \| undefined` | Optional | - |
| `invoice` | [`Invoice1 \| undefined`](../../doc/models/invoice-1.md) | Optional | - |
| `eventType` | `string \| undefined` | Optional | - |
| `eventData` | [`ApplyCreditNoteEventData1 \| undefined`](../../doc/models/apply-credit-note-event-data-1.md) | Optional | Example schema for an `apply_credit_note` event |

## Example (as JSON)

```json
{
  "event_type": "Invoice Event",
  "id": 78,
  "timestamp": "2016-03-13T12:52:32.123Z",
  "invoice": {
    "id": 166,
    "uid": "uid6",
    "site_id": 92,
    "customer_id": 204,
    "subscription_id": 20
  },
  "event_data": {
    "uid": "uid6",
    "credit_note_number": "credit_note_number0",
    "credit_note_uid": "credit_note_uid0",
    "original_amount": "original_amount0",
    "applied_amount": "applied_amount2",
    "transaction_time": "2016-03-13T12:52:32.123Z",
    "memo": "memo0",
    "role": "unset",
    "consolidated_invoice": false,
    "applied_credit_notes": [
      {
        "uid": "uid4",
        "number": "number8"
      },
      {
        "uid": "uid4",
        "number": "number8"
      },
      {
        "uid": "uid4",
        "number": "number8"
      }
    ],
    "debit_note_number": "debit_note_number6",
    "debit_note_uid": "debit_note_uid2",
    "consolidation_level": "child",
    "payment_method": {
      "type": "credit_card"
    },
    "transaction_id": 78,
    "parent_invoice_number": 36,
    "remaining_prepayment_amount": "remaining_prepayment_amount6",
    "prepayment": false,
    "total_amount": "total_amount2",
    "refund_amount": "refund_amount8",
    "due_amount": "due_amount8",
    "chargeback_status": "won",
    "from_collection_method": "from_collection_method4",
    "to_collection_method": "to_collection_method8",
    "from_status": {
      "key1": "val1",
      "key2": "val2"
    },
    "to_status": {
      "key1": "val1",
      "key2": "val2"
    },
    "amount_in_cents": 220,
    "apply_credit": false,
    "credit_note_attributes": {
      "uid": "uid2",
      "site_id": 72,
      "customer_id": 184,
      "subscription_id": 0,
      "number": "number0"
    },
    "payment_id": 204,
    "refund_id": 248,
    "is_advance_invoice": false,
    "reason": "reason2"
  }
}
```

