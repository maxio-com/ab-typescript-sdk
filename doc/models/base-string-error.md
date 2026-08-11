
# Base String Error

The error is base if it is not directly associated with a single attribute.

## Structure

`BaseStringError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `base` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { BaseStringError } from '@maxio-com/advanced-billing-sdk';

const baseStringError: BaseStringError = {
  base: [
    'base5',
    'base6'
  ],
};
```

