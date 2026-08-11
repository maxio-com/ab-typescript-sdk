
# Reason Code Response

## Structure

`ReasonCodeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reasonCode` | [`ReasonCode`](../../doc/models/reason-code.md) | Required | - |

## Example

```ts
import { ReasonCodeResponse } from '@maxio-com/advanced-billing-sdk';

const reasonCodeResponse: ReasonCodeResponse = {
  reasonCode: {
    id: 240,
    siteId: 166,
    code: 'code4',
    description: 'description6',
    position: 14,
  },
};
```

