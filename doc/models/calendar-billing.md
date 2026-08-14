
# Calendar Billing

(Optional). Cannot be used when also specifying next_billing_at.

## Structure

`CalendarBilling`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `snapDay` | [`CalendarBillingSnapDay \| undefined`](../../doc/models/containers/calendar-billing-snap-day.md) | Optional | This is a container for one-of cases. |
| `calendarBillingFirstCharge` | [`FirstChargeType \| undefined`](../../doc/models/first-charge-type.md) | Optional | - |

## Example

```ts
import {
  CalendarBilling,
  FirstChargeType,
} from '@maxio-com/advanced-billing-sdk';

const calendarBilling: CalendarBilling = {
  snapDay: 200,
  calendarBillingFirstCharge: FirstChargeType.Delayed,
};
```

