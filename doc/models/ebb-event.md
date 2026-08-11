
# EBB Event

## Structure

`EBBEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargify` | [`ChargifyEBB \| undefined`](../../doc/models/chargify-ebb.md) | Optional | - |

## Example

```ts
import { EBBEvent } from '@maxio-com/advanced-billing-sdk';

const eBBEvent: EBBEvent = {
  chargify: {
    timestamp: '2020-02-27T17:45:50-05:00',
    subscriptionId: 1,
  },
};
```

