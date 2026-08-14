
# Update Component Request

## Structure

`UpdateComponentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `component` | [`UpdateComponent`](../../doc/models/update-component.md) | Required | - |

## Example

```ts
import {
  ItemCategory,
  UpdateComponentRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateComponentRequest: UpdateComponentRequest = {
  component: {
    handle: 'handle4',
    name: 'name8',
    description: 'description2',
    accountingCode: 'accounting_code4',
    taxable: false,
    itemCategory: ItemCategory.EnumBusinessSoftware,
  },
};
```

