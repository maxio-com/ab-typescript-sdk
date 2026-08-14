
# Create or Update Product Request

## Structure

`CreateOrUpdateProductRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `product` | [`CreateOrUpdateProduct`](../../doc/models/create-or-update-product.md) | Required | - |

## Example

```ts
import {
  CreateOrUpdateProductRequest,
  IntervalUnit,
} from '@maxio-com/advanced-billing-sdk';

const createOrUpdateProductRequest: CreateOrUpdateProductRequest = {
  product: {
    name: 'name0',
    description: 'description0',
    priceInCents: BigInt(54),
    interval: 186,
    intervalUnit: IntervalUnit.Day,
    handle: 'handle6',
    accountingCode: 'accounting_code6',
    requireCreditCard: false,
    trialPriceInCents: BigInt(34),
    trialInterval: 88,
  },
};
```

