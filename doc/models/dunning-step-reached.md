
# Dunning Step Reached

## Structure

`DunningStepReached`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dunner` | [`DunnerData`](../../doc/models/dunner-data.md) | Required | - |
| `currentStep` | [`DunningStepData`](../../doc/models/dunning-step-data.md) | Required | - |
| `nextStep` | [`DunningStepData`](../../doc/models/dunning-step-data.md) | Required | - |

## Example

```ts
import { DunningStepReached } from '@maxio-com/advanced-billing-sdk';

const dunningStepReached: DunningStepReached = {
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
    emailBody: 'email_body4',
    emailSubject: 'email_subject6',
    smsBody: 'sms_body0',
  },
  nextStep: {
    dayThreshold: 30,
    action: 'action4',
    sendEmail: false,
    sendBccEmail: false,
    sendSms: false,
    emailBody: 'email_body4',
    emailSubject: 'email_subject4',
    smsBody: 'sms_body0',
  },
};
```

