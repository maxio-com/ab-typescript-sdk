
# Base Refund Error

## Structure

`BaseRefundError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `base` | `unknown[] \| undefined` | Optional | - |

## Example

```ts
import { BaseRefundError } from '@maxio-com/advanced-billing-sdk';

const baseRefundError: BaseRefundError = {
  base: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

