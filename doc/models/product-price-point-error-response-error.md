
# Product Price Point Error Response Error

## Structure

`ProductPricePointErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`ProductPricePointErrors`](../../doc/models/product-price-point-errors.md) | Required | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ProductPricePointErrorResponseError) {
    console.log(error.result);
  }
}
```

