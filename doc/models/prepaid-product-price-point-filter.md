
# Prepaid Product Price Point Filter

## Structure

`PrepaidProductPricePointFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productPricePointId` | `string` | Required, Constant | Passed as a parameter to list methods to return only non null values.<br><br>**Value**: `'not_null'` |

## Example

```ts
import {
  PrepaidProductPricePointFilter,
} from '@maxio-com/advanced-billing-sdk';

const prepaidProductPricePointFilter: PrepaidProductPricePointFilter = {
  productPricePointId: 'not_null',
};
```

