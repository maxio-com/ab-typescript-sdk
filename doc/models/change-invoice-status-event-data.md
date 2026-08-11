
# Change Invoice Status Event Data

Example schema for an `change_invoice_status` event

## Structure

`ChangeInvoiceStatusEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gatewayTransId` | `string \| undefined` | Optional | Identifier for the transaction within the payment gateway. |
| `amount` | `string \| undefined` | Optional | The monetary value associated with the linked payment, expressed in dollars. |
| `fromStatus` | [`InvoiceStatus`](../../doc/models/invoice-status.md) | Required | The status of the invoice before any changes occurred. See [Invoice Statuses](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview#invoice-statuses) for more. |
| `toStatus` | [`InvoiceStatus`](../../doc/models/invoice-status.md) | Required | The updated status of the invoice after changes have been made. See [Invoice Statuses](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview#invoice-statuses) for more. |
| `consolidationLevel` | [`InvoiceConsolidationLevel \| undefined`](../../doc/models/invoice-consolidation-level.md) | Optional | - |

## Example

```ts
import {
  ChangeInvoiceStatusEventData,
  InvoiceConsolidationLevel,
  InvoiceStatus,
} from '@maxio-com/advanced-billing-sdk';

const changeInvoiceStatusEventData: ChangeInvoiceStatusEventData = {
  fromStatus: InvoiceStatus.Canceled,
  toStatus: InvoiceStatus.Processing,
  gatewayTransId: 'gateway_trans_id4',
  amount: 'amount6',
  consolidationLevel: InvoiceConsolidationLevel.Parent,
};
```

