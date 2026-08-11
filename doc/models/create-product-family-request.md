
# Create Product Family Request

## Structure

`CreateProductFamilyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productFamily` | [`CreateProductFamily`](../../doc/models/create-product-family.md) | Required | - |

## Example

```ts
import { CreateProductFamilyRequest } from '@maxio-com/advanced-billing-sdk';

const createProductFamilyRequest: CreateProductFamilyRequest = {
  productFamily: {
    name: 'name0',
    handle: 'handle6',
    description: 'description0',
    surcharging: false,
  },
};
```

