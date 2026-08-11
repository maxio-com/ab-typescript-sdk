
# Event Based Billing Segment Errors Error

## Structure

`EventBasedBillingSegmentErrorsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `Record<string, unknown> \| undefined` | Optional | The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof EventBasedBillingSegmentErrorsError) {
    console.log(error.result);
  }
}
```

