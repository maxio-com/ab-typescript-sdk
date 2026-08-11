
# Customer Error Response Error

## Structure

`CustomerErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`CustomerErrorResponseErrors \| undefined`](../../doc/models/containers/customer-error-response-errors.md) | Optional | This is a container for one-of cases. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof CustomerErrorResponseError) {
    console.log(error.result);
  }
}
```

