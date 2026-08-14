
# Create Reason Code Request

## Structure

`CreateReasonCodeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reasonCode` | [`CreateReasonCode`](../../doc/models/create-reason-code.md) | Required | - |

## Example

```ts
import { CreateReasonCodeRequest } from '@maxio-com/advanced-billing-sdk';

const createReasonCodeRequest: CreateReasonCodeRequest = {
  reasonCode: {
    code: 'code4',
    description: 'description6',
    position: 14,
  },
};
```

