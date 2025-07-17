
# Tax Configuration

## Structure

`TaxConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kind` | [`TaxConfigurationKind \| undefined`](../../doc/models/tax-configuration-kind.md) | Optional | **Default**: `TaxConfigurationKind.Custom` |
| `destinationAddress` | [`TaxDestinationAddress \| undefined`](../../doc/models/tax-destination-address.md) | Optional | - |
| `fullyConfigured` | `boolean \| undefined` | Optional | Returns `true` when Chargify has been properly configured to charge tax using the specified tax system. More details about taxes: https://maxio.zendesk.com/hc/en-us/articles/24287012608909-Taxes-Overview<br><br>**Default**: `false` |

## Example (as JSON)

```json
{
  "kind": "custom",
  "fully_configured": false,
  "destination_address": "shipping_only"
}
```

