
# Consolidated Invoice

## Structure

`ConsolidatedInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoices` | [`Invoice[] \| undefined`](../../doc/models/invoice.md) | Optional | - |

## Example

```ts
import { ConsolidatedInvoice } from '@maxio-com/advanced-billing-sdk';

const consolidatedInvoice: ConsolidatedInvoice = {
  invoices: [
    {
      id: BigInt(196),
      uid: 'uid6',
      siteId: 122,
      customerId: 234,
      subscriptionId: 50,
    },
    {
      id: BigInt(196),
      uid: 'uid6',
      siteId: 122,
      customerId: 234,
      subscriptionId: 50,
    },
    {
      id: BigInt(196),
      uid: 'uid6',
      siteId: 122,
      customerId: 234,
      subscriptionId: 50,
    }
  ],
};
```

