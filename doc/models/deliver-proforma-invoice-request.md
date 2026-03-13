
# Deliver Proforma Invoice Request

## Structure

`DeliverProformaInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientEmails` | `string[] \| undefined` | Optional | - |
| `ccRecipientEmails` | `string[] \| undefined` | Optional | - |
| `bccRecipientEmails` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "recipient_emails": [
    "recipient_emails9"
  ],
  "cc_recipient_emails": [
    "cc_recipient_emails8"
  ],
  "bcc_recipient_emails": [
    "bcc_recipient_emails2",
    "bcc_recipient_emails3",
    "bcc_recipient_emails4"
  ]
}
```

