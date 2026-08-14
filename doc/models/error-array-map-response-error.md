
# Error Array Map Response Error

## Structure

`ErrorArrayMapResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `Record<string, unknown> \| undefined` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ErrorArrayMapResponseError) {
    console.log(error.result);
  }
}
```

