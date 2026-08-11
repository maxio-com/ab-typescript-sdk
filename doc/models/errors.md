
# Errors

## Structure

`Errors`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `perPage` | `string[] \| undefined` | Optional | - |
| `pricePoint` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { Errors } from '@maxio-com/advanced-billing-sdk';

const errors: Errors = {
  perPage: [
    'per_page1',
    'per_page2',
    'per_page3'
  ],
  pricePoint: [
    'price_point0',
    'price_point9',
    'price_point8'
  ],
};
```

