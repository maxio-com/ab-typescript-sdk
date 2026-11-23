
# Event Based Billing List Segments Errors Error

## Structure

`EventBasedBillingListSegmentsErrorsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Errors \| undefined`](../../doc/models/errors.md) | Optional | Validation error details for listing segments. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof EventBasedBillingListSegmentsErrorsError) {
    console.log(error.result);
  }
}
```

