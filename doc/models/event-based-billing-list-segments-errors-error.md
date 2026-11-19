
# Event Based Billing List Segments Errors Error

## Structure

`EventBasedBillingListSegmentsErrorsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Errors1 \| undefined`](../../doc/models/errors-1.md) | Optional | - |

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

