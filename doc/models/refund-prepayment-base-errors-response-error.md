
# Refund Prepayment Base Errors Response Error

Errors returned on creating a refund prepayment when bad request

## Structure

`RefundPrepaymentBaseErrorsResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`RefundPrepaymentBaseRefundError \| undefined`](../../doc/models/refund-prepayment-base-refund-error.md) | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof RefundPrepaymentBaseErrorsResponseError) {
    console.log(error.result);
  }
}
```

