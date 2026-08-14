
# Update Reason Code Request

## Structure

`UpdateReasonCodeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reasonCode` | [`UpdateReasonCode`](../../doc/models/update-reason-code.md) | Required | - |

## Example

```ts
import { UpdateReasonCodeRequest } from '@maxio-com/advanced-billing-sdk';

const updateReasonCodeRequest: UpdateReasonCodeRequest = {
  reasonCode: {
    code: 'code4',
    description: 'description6',
    position: 14,
  },
};
```

