
# Event Event Specific Data

## Class Name

`EventEventSpecificData`

## Cases

| Type |
|  --- |
| [`SubscriptionProductChange`](../../../doc/models/subscription-product-change.md) |
| [`SubscriptionProductChangeScheduled`](../../../doc/models/subscription-product-change-scheduled.md) |
| [`SubscriptionStateChange`](../../../doc/models/subscription-state-change.md) |
| [`PaymentRelatedEvents`](../../../doc/models/payment-related-events.md) |
| [`RefundSuccess`](../../../doc/models/refund-success.md) |
| [`ComponentAllocationChange`](../../../doc/models/component-allocation-change.md) |
| [`MeteredUsage`](../../../doc/models/metered-usage.md) |
| [`PrepaidUsage`](../../../doc/models/prepaid-usage.md) |
| [`DunningStepReached`](../../../doc/models/dunning-step-reached.md) |
| [`InvoiceIssued`](../../../doc/models/invoice-issued.md) |
| [`PendingCancellationChange`](../../../doc/models/pending-cancellation-change.md) |
| [`PrepaidSubscriptionBalanceChanged`](../../../doc/models/prepaid-subscription-balance-changed.md) |
| [`ProformaInvoiceIssued`](../../../doc/models/proforma-invoice-issued.md) |
| [`SubscriptionGroupSignupEventData`](../../../doc/models/subscription-group-signup-event-data.md) |
| [`CreditAccountBalanceChanged`](../../../doc/models/credit-account-balance-changed.md) |
| [`PrepaymentAccountBalanceChanged`](../../../doc/models/prepayment-account-balance-changed.md) |
| [`PaymentCollectionMethodChanged`](../../../doc/models/payment-collection-method-changed.md) |
| [`ItemPricePointChanged`](../../../doc/models/item-price-point-changed.md) |
| [`CustomFieldValueChange`](../../../doc/models/custom-field-value-change.md) |
| [`ChjsTokenizationSuccess`](../../../doc/models/chjs-tokenization-success.md) |
| [`ChjsTokenizationFailure`](../../../doc/models/chjs-tokenization-failure.md) |

## SubscriptionProductChange

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  previousProductId: 126,
  newProductId: 12,
};
```

## SubscriptionProductChangeScheduled

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  previousProductId: 62,
  newProductId: 52,
};
```

## SubscriptionStateChange

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  previousSubscriptionState: 'previous_subscription_state2',
  newSubscriptionState: 'new_subscription_state6',
};
```

## PaymentRelatedEvents

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  productId: 42,
  accountTransactionId: 58,
};
```

## RefundSuccess

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  refundId: 12,
  gatewayTransactionId: 182,
  productId: 168,
};
```

## ComponentAllocationChange

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  previousAllocation: 94,
  newAllocation: 102,
  componentId: 88,
  componentHandle: 'component_handle8',
  memo: 'memo2',
  allocationId: 158,
};
```

## MeteredUsage

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  previousUnitBalance: 'previous_unit_balance6',
  newUnitBalance: 2,
  usageQuantity: 42,
  componentId: 4,
  componentHandle: 'component_handle8',
  memo: 'memo2',
};
```

## PrepaidUsage

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  previousUnitBalance: 'previous_unit_balance0',
  previousOverageUnitBalance: 'previous_overage_unit_balance4',
  newUnitBalance: 174,
  newOverageUnitBalance: 146,
  usageQuantity: 214,
  overageUsageQuantity: 106,
  componentId: 176,
  componentHandle: 'component_handle4',
  memo: 'memo8',
  allocationDetails: [
    {
    }
  ],
};
```

## DunningStepReached

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  dunner: {
    state: 'state8',
    subscriptionId: 194,
    revenueAtRiskInCents: BigInt(98),
    createdAt: '2016-03-13T12:52:32.123Z',
    attempts: 42,
    lastAttemptedAt: '2016-03-13T12:52:32.123Z',
  },
  currentStep: {
    dayThreshold: 198,
    action: 'action4',
    sendEmail: false,
    sendBccEmail: false,
    sendSms: false,
  },
  nextStep: {
    dayThreshold: 30,
    action: 'action4',
    sendEmail: false,
    sendBccEmail: false,
    sendSms: false,
  },
};
```

## InvoiceIssued

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  uid: 'uid4',
  number: 'number8',
  role: 'role2',
  dueDate: '2016-03-13T12:52:32.123Z',
  issueDate: 'issue_date0',
  paidDate: 'paid_date6',
  dueAmount: 'due_amount6',
  paidAmount: 'paid_amount4',
  taxAmount: 'tax_amount2',
  refundAmount: 'refund_amount0',
  totalAmount: 'total_amount0',
  statusAmount: 'status_amount4',
  productName: 'product_name0',
  consolidationLevel: 'consolidation_level4',
  lineItems: [
    {
    }
  ],
};
```

## PendingCancellationChange

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  cancellationState: 'cancellation_state8',
  cancelsAt: '2016-03-13T12:52:32.123Z',
};
```

## PrepaidSubscriptionBalanceChanged

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  reason: 'reason8',
  currentAccountBalanceInCents: BigInt(250),
  prepaymentAccountBalanceInCents: BigInt(44),
  currentUsageAmountInCents: BigInt(242),
};
```

## ProformaInvoiceIssued

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  uid: 'uid0',
  number: 'number2',
  role: 'role6',
  deliveryDate: '2016-03-13T12:52:32.123Z',
  createdAt: '2016-03-13T12:52:32.123Z',
  dueAmount: 'due_amount2',
  paidAmount: 'paid_amount8',
  taxAmount: 'tax_amount6',
  totalAmount: 'total_amount6',
  productName: 'product_name6',
  lineItems: [
    {
    }
  ],
};
```

## SubscriptionGroupSignupEventData

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  subscriptionGroup: {
  },
  customer: {
  },
};
```

## CreditAccountBalanceChanged

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  reason: 'reason8',
  serviceCreditAccountBalanceInCents: BigInt(10),
  serviceCreditBalanceChangeInCents: BigInt(116),
  currencyCode: 'currency_code8',
  atTime: '2016-03-13T12:52:32.123Z',
};
```

## PrepaymentAccountBalanceChanged

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  reason: 'reason4',
  prepaymentAccountBalanceInCents: BigInt(182),
  prepaymentBalanceChangeInCents: BigInt(206),
  currencyCode: 'currency_code4',
};
```

## PaymentCollectionMethodChanged

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  previousValue: 'previous_value4',
  currentValue: 'current_value2',
};
```

## ItemPricePointChanged

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  itemId: 66,
  itemType: 'item_type6',
  itemHandle: 'item_handle4',
  itemName: 'item_name8',
  previousPricePoint: {
  },
  currentPricePoint: {
  },
};
```

## CustomFieldValueChange

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  eventType: 'event_type2',
  metafieldName: 'metafield_name6',
  metafieldId: 78,
  oldValue: 'old_value2',
  newValue: 'new_value8',
  resourceType: 'resource_type2',
  resourceId: 74,
};
```

## ChjsTokenizationSuccess

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  paymentProfile: {
    id: 44,
  },
};
```

## ChjsTokenizationFailure

### Initialization Code

#### Example

```ts
const value: EventEventSpecificData = {
  errors: 'errors2',
};
```

