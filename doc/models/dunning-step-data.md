
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

## Example

```ts
import { DunningStepData } from '@maxio-com/advanced-billing-sdk';

const dunningStepData: DunningStepData = {
  dayThreshold: 206,
  action: 'action6',
  sendEmail: false,
  sendBccEmail: false,
  sendSms: false,
  emailBody: 'email_body6',
  emailSubject: 'email_subject6',
  smsBody: 'sms_body8',
};
```

