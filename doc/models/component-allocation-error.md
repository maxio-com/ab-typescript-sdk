
# Component Allocation Error

## Structure

`ComponentAllocationError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`ComponentAllocationErrorItem[] \| undefined`](../../doc/models/component-allocation-error-item.md) | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ComponentAllocationError) {
    console.log(error.result);
  }
}
```

