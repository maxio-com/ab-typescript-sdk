
# Invoice Event

## Class Name

`InvoiceEvent`

## Cases

| Type |
|  --- |
| [`ApplyCreditNoteEvent`](../../../doc/models/apply-credit-note-event.md) |
| [`ApplyDebitNoteEvent`](../../../doc/models/apply-debit-note-event.md) |
| [`ApplyPaymentEvent`](../../../doc/models/apply-payment-event.md) |
| [`BackportInvoiceEvent`](../../../doc/models/backport-invoice-event.md) |
| [`ChangeChargebackStatusEvent`](../../../doc/models/change-chargeback-status-event.md) |
| [`ChangeInvoiceCollectionMethodEvent`](../../../doc/models/change-invoice-collection-method-event.md) |
| [`ChangeInvoiceStatusEvent`](../../../doc/models/change-invoice-status-event.md) |
| [`CreateCreditNoteEvent`](../../../doc/models/create-credit-note-event.md) |
| [`CreateDebitNoteEvent`](../../../doc/models/create-debit-note-event.md) |
| [`FailedPaymentEvent`](../../../doc/models/failed-payment-event.md) |
| [`IssueInvoiceEvent`](../../../doc/models/issue-invoice-event.md) |
| [`RefundInvoiceEvent`](../../../doc/models/refund-invoice-event.md) |
| [`RemovePaymentEvent`](../../../doc/models/remove-payment-event.md) |
| [`VoidInvoiceEvent`](../../../doc/models/void-invoice-event.md) |
| [`VoidRemainderEvent`](../../../doc/models/void-remainder-event.md) |

## ApplyCreditNoteEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(214),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.ApplyCreditNote,
  eventData: {
    uid: 'uid6',
    creditNoteNumber: 'credit_note_number0',
    creditNoteUid: 'credit_note_uid0',
    originalAmount: 'original_amount0',
    appliedAmount: 'applied_amount2',
  },
};
```

## ApplyDebitNoteEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(164),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.ApplyDebitNote,
  eventData: {
    debitNoteNumber: 'debit_note_number6',
    debitNoteUid: 'debit_note_uid2',
    originalAmount: 'original_amount0',
    appliedAmount: 'applied_amount2',
  },
};
```

## ApplyPaymentEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(234),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.ApplyPayment,
  eventData: {
    consolidationLevel: InvoiceConsolidationLevel.Child,
    memo: 'memo0',
    originalAmount: 'original_amount0',
    appliedAmount: 'applied_amount2',
    transactionTime: '2016-03-13T12:52:32.123Z',
    paymentMethod: {
      type: InvoiceEventPaymentMethod.ApplePay,
    },
  },
};
```

## BackportInvoiceEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(78),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.BackportInvoice,
  eventData: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
};
```

## ChangeChargebackStatusEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(214),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.ChangeChargebackStatus,
  eventData: {
    chargebackStatus: ChargebackStatus.Won,
  },
};
```

## ChangeInvoiceCollectionMethodEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(246),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.ChangeInvoiceCollectionMethod,
  eventData: {
    fromCollectionMethod: 'from_collection_method4',
    toCollectionMethod: 'to_collection_method8',
  },
};
```

## ChangeInvoiceStatusEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(92),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.ChangeInvoiceStatus,
  eventData: {
    fromStatus: InvoiceStatus.Open,
    toStatus: InvoiceStatus.Pending,
  },
};
```

## CreateCreditNoteEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(28),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.CreateCreditNote,
  eventData: {
  },
};
```

## CreateDebitNoteEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(98),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.CreateDebitNote,
  eventData: {
  },
};
```

## FailedPaymentEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(120),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.FailedPayment,
  eventData: {
    amountInCents: 220,
    appliedAmount: 194,
    paymentMethod: InvoicePaymentMethodType.Cash,
    transactionId: 78,
  },
};
```

## IssueInvoiceEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(130),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.IssueInvoice,
  eventData: {
    consolidationLevel: InvoiceConsolidationLevel.Child,
    fromStatus: InvoiceStatus.Open,
    toStatus: InvoiceStatus.Pending,
    dueAmount: 'due_amount8',
    totalAmount: 'total_amount2',
  },
};
```

## RefundInvoiceEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(54),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.RefundInvoice,
  eventData: {
    applyCredit: false,
    creditNoteAttributes: {
    },
    paymentId: 204,
    refundAmount: 'refund_amount8',
    refundId: 248,
    transactionTime: '2016-03-13T12:52:32.123Z',
  },
};
```

## RemovePaymentEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(236),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.RemovePayment,
  eventData: {
    transactionId: 78,
    memo: 'memo0',
    appliedAmount: 'applied_amount2',
    transactionTime: '2016-03-13T12:52:32.123Z',
    paymentMethod: {
      type: InvoiceEventPaymentMethod.ApplePay,
    },
    prepayment: false,
  },
};
```

## VoidInvoiceEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(16),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.VoidInvoice,
  eventData: {
    creditNoteAttributes: {
    },
    memo: 'memo0',
    appliedAmount: 'applied_amount2',
    transactionTime: '2016-03-13T12:52:32.123Z',
    isAdvanceInvoice: false,
    reason: 'reason2',
  },
};
```

## VoidRemainderEvent

### Initialization Code

#### Example

```ts
const value: InvoiceEvent = {
  id: BigInt(128),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.VoidRemainder,
  eventData: {
    creditNoteAttributes: {
    },
    memo: 'memo0',
    appliedAmount: 'applied_amount2',
    transactionTime: '2016-03-13T12:52:32.123Z',
  },
};
```

