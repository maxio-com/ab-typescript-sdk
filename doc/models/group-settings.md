
# Group Settings

## Structure

`GroupSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `target` | [`GroupTarget`](../../doc/models/group-target.md) | Required | Attributes of the target customer who will be the responsible payer of the created subscription. Required. |
| `billing` | [`GroupBilling \| undefined`](../../doc/models/group-billing.md) | Optional | (Optional) Attributes related to billing date and accrual. Note: Only applicable for new subscriptions. |

## Example

```ts
import {
  GroupSettings,
  GroupTargetType,
} from '@maxio-com/advanced-billing-sdk';

const groupSettings: GroupSettings = {
  target: {
    type: GroupTargetType.Parent,
    id: 236,
  },
  billing: {
    accrue: false,
    alignDate: false,
    prorate: false,
  },
};
```

