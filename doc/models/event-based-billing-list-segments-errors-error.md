
# Event Based Billing List Segments Errors Error

## Structure

`EventBasedBillingListSegmentsErrorsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Errors \| undefined`](../../doc/models/errors.md) | Optional | - |

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

