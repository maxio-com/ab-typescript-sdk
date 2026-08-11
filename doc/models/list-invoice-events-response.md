
# List Invoice Events Response

## Structure

`ListInvoiceEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `events` | [`InvoiceEvent[] \| undefined`](../../doc/models/containers/invoice-event.md) | Optional | - |
| `page` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `totalPages` | `number \| undefined` | Optional | - |

## Example

```ts
import {
  InvoiceEventType,
  ListInvoiceEventsResponse,
} from '@maxio-com/advanced-billing-sdk';

const listInvoiceEventsResponse: ListInvoiceEventsResponse = {
  events: [
    {
      id: BigInt(214),
      timestamp: '2016-03-13T12:52:32.123Z',
      invoice: {
        id: BigInt(166),
        uid: 'uid6',
        siteId: 92,
        customerId: 204,
        subscriptionId: 20,
      },
      eventType: InvoiceEventType.ApplyCreditNote,
      eventData: {
        uid: 'uid6',
        creditNoteNumber: 'credit_note_number0',
        creditNoteUid: 'credit_note_uid0',
        originalAmount: 'original_amount0',
        appliedAmount: 'applied_amount2',
        transactionTime: '2016-03-13T12:52:32.123Z',
        memo: 'memo0',
        role: 'role0',
        consolidatedInvoice: false,
        appliedCreditNotes: [
          {
            uid: 'uid4',
            number: 'number8',
          },
          {
            uid: 'uid4',
            number: 'number8',
          },
          {
            uid: 'uid4',
            number: 'number8',
          }
        ],
      },
    },
    {
      id: BigInt(214),
      timestamp: '2016-03-13T12:52:32.123Z',
      invoice: {
        id: BigInt(166),
        uid: 'uid6',
        siteId: 92,
        customerId: 204,
        subscriptionId: 20,
      },
      eventType: InvoiceEventType.ApplyCreditNote,
      eventData: {
        uid: 'uid6',
        creditNoteNumber: 'credit_note_number0',
        creditNoteUid: 'credit_note_uid0',
        originalAmount: 'original_amount0',
        appliedAmount: 'applied_amount2',
        transactionTime: '2016-03-13T12:52:32.123Z',
        memo: 'memo0',
        role: 'role0',
        consolidatedInvoice: false,
        appliedCreditNotes: [
          {
            uid: 'uid4',
            number: 'number8',
          },
          {
            uid: 'uid4',
            number: 'number8',
          },
          {
            uid: 'uid4',
            number: 'number8',
          }
        ],
      },
    },
    {
      id: BigInt(214),
      timestamp: '2016-03-13T12:52:32.123Z',
      invoice: {
        id: BigInt(166),
        uid: 'uid6',
        siteId: 92,
        customerId: 204,
        subscriptionId: 20,
      },
      eventType: InvoiceEventType.ApplyCreditNote,
      eventData: {
        uid: 'uid6',
        creditNoteNumber: 'credit_note_number0',
        creditNoteUid: 'credit_note_uid0',
        originalAmount: 'original_amount0',
        appliedAmount: 'applied_amount2',
        transactionTime: '2016-03-13T12:52:32.123Z',
        memo: 'memo0',
        role: 'role0',
        consolidatedInvoice: false,
        appliedCreditNotes: [
          {
            uid: 'uid4',
            number: 'number8',
          },
          {
            uid: 'uid4',
            number: 'number8',
          },
          {
            uid: 'uid4',
            number: 'number8',
          }
        ],
      },
    }
  ],
  page: 28,
  perPage: 196,
  totalPages: 94,
};
```

