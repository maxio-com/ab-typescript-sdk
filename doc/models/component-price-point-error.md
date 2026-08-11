
# Component Price Point Error

## Structure

`ComponentPricePointError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`ComponentPricePointErrorItem[] \| undefined`](../../doc/models/component-price-point-error-item.md) | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ComponentPricePointError) {
    console.log(error.result);
  }
}
```

