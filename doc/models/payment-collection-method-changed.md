
# Payment Collection Method Changed

## Structure

`PaymentCollectionMethodChanged`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `previousValue` | `string` | Required | - |
| `currentValue` | `string` | Required | - |

## Example

```ts
import {
  PaymentCollectionMethodChanged,
} from '@maxio-com/advanced-billing-sdk';

const paymentCollectionMethodChanged: PaymentCollectionMethodChanged = {
  previousValue: 'previous_value4',
  currentValue: 'current_value2',
};
```

