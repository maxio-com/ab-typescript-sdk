
# Change Chargeback Status Event Data

Example schema for an `change_chargeback_status` event

## Structure

`ChangeChargebackStatusEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargebackStatus` | [`ChargebackStatus`](../../doc/models/chargeback-status.md) | Required | - |

## Example

```ts
import {
  ChangeChargebackStatusEventData,
  ChargebackStatus,
} from '@maxio-com/advanced-billing-sdk';

const changeChargebackStatusEventData: ChangeChargebackStatusEventData = {
  chargebackStatus: ChargebackStatus.Won,
};
```

