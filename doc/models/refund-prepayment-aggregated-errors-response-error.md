
# Refund Prepayment Aggregated Errors Response Error

Errors returned on creating a refund prepayment, grouped by field, as arrays of strings.

## Structure

`RefundPrepaymentAggregatedErrorsResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`RefundPrepaymentAggregatedError \| undefined`](../../doc/models/refund-prepayment-aggregated-error.md) | Optional | - |

## Example (as JSON)

```json
{
  "errors": {
    "refund": {
      "amount_in_cents": [
        "amount_in_cents5"
      ],
      "base": [
        "base7"
      ],
      "external": [
        "external0",
        "external1"
      ]
    }
  }
}
```

