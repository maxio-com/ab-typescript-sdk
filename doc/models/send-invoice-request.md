
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

## Example (as JSON)

```json
{
  "recipient_emails": [
    "recipient_emails3",
    "recipient_emails4"
  ],
  "cc_recipient_emails": [
    "cc_recipient_emails6",
    "cc_recipient_emails5"
  ],
  "bcc_recipient_emails": [
    "bcc_recipient_emails6"
  ],
  "attachment_urls": [
    "attachment_urls0",
    "attachment_urls1"
  ]
}
```

