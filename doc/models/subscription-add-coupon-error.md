
# Subscription Add Coupon Error

## Structure

`SubscriptionAddCouponError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `codes` | `string[] \| undefined` | Optional | - |
| `couponCode` | `string[] \| undefined` | Optional | - |
| `couponCodes` | `string[] \| undefined` | Optional | - |
| `subscription` | `string[] \| undefined` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SubscriptionAddCouponError) {
    console.log(error.result);
  }
}
```

