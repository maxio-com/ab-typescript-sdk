
# Error List Response Error

Error which contains list of messages.

## Structure

`ErrorListResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `string[]` | Required | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ErrorListResponseError) {
    console.log(error.result);
  }
}
```

