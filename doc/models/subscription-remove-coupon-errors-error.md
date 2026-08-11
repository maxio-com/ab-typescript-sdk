
# Subscription Remove Coupon Errors Error

## Structure

`SubscriptionRemoveCouponErrorsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | `string[]` | Required | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SubscriptionRemoveCouponErrorsError) {
    console.log(error.result);
  }
}
```

