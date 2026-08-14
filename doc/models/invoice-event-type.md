
# Invoice Event Type

Invoice Event Type

## Enumeration

`InvoiceEventType`

## Fields

| Name |
|  --- |
| `IssueInvoice` |
| `ApplyCreditNote` |
| `CreateCreditNote` |
| `ApplyPayment` |
| `ApplyDebitNote` |
| `CreateDebitNote` |
| `RefundInvoice` |
| `VoidInvoice` |
| `VoidRemainder` |
| `BackportInvoice` |
| `ChangeInvoiceStatus` |
| `ChangeInvoiceCollectionMethod` |
| `RemovePayment` |
| `FailedPayment` |
| `ChangeChargebackStatus` |

## Example

```ts
import { InvoiceEventType } from '@maxio-com/advanced-billing-sdk';

const invoiceEventType = InvoiceEventType.CreateCreditNote;
```

