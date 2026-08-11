
# Single Error Response Error

## Structure

`SingleErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | `string` | Required | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SingleErrorResponseError) {
    console.log(error.result);
  }
}
```

