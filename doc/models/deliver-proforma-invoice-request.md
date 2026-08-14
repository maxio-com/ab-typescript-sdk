
# Deliver Proforma Invoice Request

## Structure

`DeliverProformaInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientEmails` | `string[] \| undefined` | Optional | - |
| `ccRecipientEmails` | `string[] \| undefined` | Optional | - |
| `bccRecipientEmails` | `string[] \| undefined` | Optional | - |

## Example

```ts
import {
  DeliverProformaInvoiceRequest,
} from '@maxio-com/advanced-billing-sdk';

const deliverProformaInvoiceRequest: DeliverProformaInvoiceRequest = {
  recipientEmails: [
    'recipient_emails3',
    'recipient_emails4'
  ],
  ccRecipientEmails: [
    'cc_recipient_emails2',
    'cc_recipient_emails1',
    'cc_recipient_emails0'
  ],
  bccRecipientEmails: [
    'bcc_recipient_emails6'
  ],
};
```

