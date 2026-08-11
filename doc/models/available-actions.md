
# Available Actions

## Structure

`AvailableActions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sendEmail` | [`SendEmail \| undefined`](../../doc/models/send-email.md) | Optional | - |

## Example

```ts
import { AvailableActions } from '@maxio-com/advanced-billing-sdk';

const availableActions: AvailableActions = {
  sendEmail: {
    canExecute: false,
    url: 'url0',
  },
};
```

