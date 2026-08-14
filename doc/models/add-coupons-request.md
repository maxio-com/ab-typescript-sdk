
# Add Coupons Request

## Structure

`AddCouponsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `codes` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { AddCouponsRequest } from '@maxio-com/advanced-billing-sdk';

const addCouponsRequest: AddCouponsRequest = {
  codes: [
    'codes6',
    'codes7'
  ],
};
```

