
# Aggregated Entitlements Response

## Structure

`AggregatedEntitlementsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Required | - |
| `customerId` | `number` | Required | - |
| `status` | `string` | Required | The subscription's current state, e.g. `active`, `trialing`, `canceled`. |
| `entitlements` | [`AggregatedEntitlement[]`](../../doc/models/aggregated-entitlement.md) | Required | - |

## Example

```ts
import {
  AggregatedEntitlementsResponse,
  FeatureKind,
} from '@maxio-com/advanced-billing-sdk';

const aggregatedEntitlementsResponse: AggregatedEntitlementsResponse = {
  subscriptionId: 114,
  customerId: 42,
  status: 'status6',
  entitlements: [
    {
      featureKey: 'feature.sso',
      periodicityKey: 'usage.api_calls:1:month',
      name: 'name6',
      type: FeatureKind.ServiceRight,
      value: true,
    }
  ],
};
```

