
# Refund Prepayment Base Refund Error

## Structure

`RefundPrepaymentBaseRefundError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refund` | [`BaseRefundError \| undefined`](../../doc/models/base-refund-error.md) | Optional | - |

## Example

```ts
import {
  RefundPrepaymentBaseRefundError,
} from '@maxio-com/advanced-billing-sdk';

const refundPrepaymentBaseRefundError: RefundPrepaymentBaseRefundError = {
  refund: {
    base: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
  },
};
```

