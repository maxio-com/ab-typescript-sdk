
# Too Many Management Link Requests

## Structure

`TooManyManagementLinkRequests`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | `string` | Required | - |
| `newLinkAvailableAt` | `string` | Required | - |

## Example

```ts
import {
  TooManyManagementLinkRequests,
} from '@maxio-com/advanced-billing-sdk';

const tooManyManagementLinkRequests: TooManyManagementLinkRequests = {
  error: 'error8',
  newLinkAvailableAt: '2016-03-13T12:52:32.123Z',
};
```

