
# Refund Prepayment Base Errors Response Error

Errors returned on creating a refund prepayment when bad request

## Structure

`RefundPrepaymentBaseErrorsResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`RefundPrepaymentBaseRefundError \| undefined`](../../doc/models/refund-prepayment-base-refund-error.md) | Optional | - |

## Example (as JSON)

```json
{
  "errors": {
    "refund": {
      "base": [
        {
          "key1": "val1",
          "key2": "val2"
        }
      ]
    }
  }
}
```

