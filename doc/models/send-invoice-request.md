
# Send Invoice Request

## Structure

`SendInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientEmails` | `string[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `5` |
| `ccRecipientEmails` | `string[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `5` |
| `bccRecipientEmails` | `string[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `5` |
| `attachmentUrls` | `string[] \| undefined` | Optional | Array of URLs to files to attach to the invoice email. Max 10 files, 10MB each.<br><br>**Constraints**: *Maximum Items*: `10` |

## Example

```ts
import { SendInvoiceRequest } from '@maxio-com/advanced-billing-sdk';

const sendInvoiceRequest: SendInvoiceRequest = {
  recipientEmails: [
    'recipient_emails7'
  ],
  ccRecipientEmails: [
    'cc_recipient_emails2'
  ],
  bccRecipientEmails: [
    'bcc_recipient_emails0',
    'bcc_recipient_emails1',
    'bcc_recipient_emails2'
  ],
  attachmentUrls: [
    'attachment_urls4'
  ],
};
```

