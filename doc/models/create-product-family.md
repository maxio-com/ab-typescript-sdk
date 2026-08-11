
# Create Product Family

## Structure

`CreateProductFamily`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `handle` | `string \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `surcharging` | `boolean \| undefined` | Optional | Whether surcharging applies to this product family. Defaults to `true` when omitted. Only applied on sites where surcharging is enabled. |

## Example

```ts
import { CreateProductFamily } from '@maxio-com/advanced-billing-sdk';

const createProductFamily: CreateProductFamily = {
  name: 'name0',
  handle: 'handle6',
  description: 'description0',
  surcharging: false,
};
```

