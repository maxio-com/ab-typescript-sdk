
# Too Many Management Link Requests Error

## Structure

`TooManyManagementLinkRequestsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`TooManyManagementLinkRequests`](../../doc/models/too-many-management-link-requests.md) | Required | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof TooManyManagementLinkRequestsError) {
    console.log(error.result);
  }
}
```

