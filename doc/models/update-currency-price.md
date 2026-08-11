
# Update Currency Price

## Structure

`UpdateCurrencyPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | ID of the currency price record being updated |
| `price` | `number` | Required | New price for the given currency |

## Example

```ts
import { UpdateCurrencyPrice } from '@maxio-com/advanced-billing-sdk';

const updateCurrencyPrice: UpdateCurrencyPrice = {
  id: 104,
  price: 163.6,
};
```

