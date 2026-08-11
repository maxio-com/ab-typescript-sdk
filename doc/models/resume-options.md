
# Resume Options

## Structure

`ResumeOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requireResume` | `boolean \| undefined` | Optional | Chargify will only attempt to resume the subscription's billing period. If not resumable, the subscription will be left in its current state. |
| `forgiveBalance` | `boolean \| undefined` | Optional | Indicates whether or not Chargify should clear the subscription's existing balance before attempting to resume the subscription. If subscription cannot be resumed, the balance will remain as it was before the attempt to resume was made. |

## Example

```ts
import { ResumeOptions } from '@maxio-com/advanced-billing-sdk';

const resumeOptions: ResumeOptions = {
  requireResume: false,
  forgiveBalance: false,
};
```

