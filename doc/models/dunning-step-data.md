
# Dunning Step Data

## Structure

`DunningStepData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dayThreshold` | `number` | Required | - |
| `action` | `string` | Required | - |
| `emailBody` | `string \| null \| undefined` | Optional | - |
| `emailSubject` | `string \| null \| undefined` | Optional | - |
| `sendEmail` | `boolean` | Required | - |
| `sendBccEmail` | `boolean` | Required | - |
| `sendSms` | `boolean` | Required | - |
| `smsBody` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "day_threshold": 88,
  "action": "action4",
  "email_body": "email_body4",
  "email_subject": "email_subject4",
  "send_email": false,
  "send_bcc_email": false,
  "send_sms": false,
  "sms_body": "sms_body0"
}
```

