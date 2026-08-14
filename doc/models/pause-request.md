
# Pause Request

Allows you to pause a Subscription.

## Structure

`PauseRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hold` | [`AutoResume \| undefined`](../../doc/models/auto-resume.md) | Optional | - |

## Example

```ts
import { PauseRequest } from '@maxio-com/advanced-billing-sdk';

const pauseRequest: PauseRequest = {
  hold: {
    automaticallyResumeAt: '2016-03-13T12:52:32.123Z',
  },
};
```

