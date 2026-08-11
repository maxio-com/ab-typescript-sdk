
# Origin Invoice

## Structure

`OriginInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | The UID of the invoice serving as an origin invoice. |
| `number` | `string \| undefined` | Optional | The number of the invoice serving as an origin invoice. |

## Example

```ts
import { OriginInvoice } from '@maxio-com/advanced-billing-sdk';

const originInvoice: OriginInvoice = {
  uid: 'uid8',
  number: 'number4',
};
```

