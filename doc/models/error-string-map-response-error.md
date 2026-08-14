
# Error String Map Response Error

## Structure

`ErrorStringMapResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `Record<string, string> \| undefined` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ErrorStringMapResponseError) {
    console.log(error.result);
  }
}
```

