
# Proforma Error

## Structure

`ProformaError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`BaseStringError \| undefined`](../../doc/models/base-string-error.md) | Optional | The error is base if it is not directly associated with a single attribute. |

## Example

```ts
import { ProformaError } from '@maxio-com/advanced-billing-sdk';

const proformaError: ProformaError = {
  subscription: {
    base: [
      'base3',
      'base4'
    ],
  },
};
```

