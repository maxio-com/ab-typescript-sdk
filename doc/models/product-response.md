
# Product Response

## Structure

`ProductResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `product` | [`Product`](../../doc/models/product.md) | Required | - |

## Example

```ts
import { ProductResponse } from '@maxio-com/advanced-billing-sdk';

const productResponse: ProductResponse = {
  product: {
    id: 134,
    name: 'name0',
    handle: 'handle6',
    description: 'description0',
    accountingCode: 'accounting_code6',
  },
};
```

