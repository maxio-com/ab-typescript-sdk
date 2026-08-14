
# Proforma Bad Request Error Response Error

## Structure

`ProformaBadRequestErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`ProformaError \| undefined`](../../doc/models/proforma-error.md) | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ProformaBadRequestErrorResponseError) {
    console.log(error.result);
  }
}
```

