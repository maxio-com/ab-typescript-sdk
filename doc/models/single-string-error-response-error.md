
# Single String Error Response Error

## Structure

`SingleStringErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `string \| undefined` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SingleStringErrorResponseError) {
    console.log(error.result);
  }
}
```

