
# Meter

The metering meter this wallet is paired with, or `null` for a wallet with no meter. Set on create and immutable afterward.

## Structure

`Meter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `handle` | `string \| undefined` | Optional | - |
| `conversionRate` | `string \| undefined` | Optional | How many wallet units one meter unit is worth, as a decimal string. Defaults to `"1.0"`. |

## Example

```ts
import { Meter } from '@maxio-com/advanced-billing-sdk';

const meter: Meter = {
  id: 198,
  name: 'name0',
  handle: 'handle6',
  conversionRate: 'conversion_rate2',
};
```

