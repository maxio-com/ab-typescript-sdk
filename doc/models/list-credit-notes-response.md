
# List Credit Notes Response

## Structure

`ListCreditNotesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditNotes` | [`CreditNote[]`](../../doc/models/credit-note.md) | Required | - |

## Example

```ts
import { ListCreditNotesResponse } from '@maxio-com/advanced-billing-sdk';

const listCreditNotesResponse: ListCreditNotesResponse = {
  creditNotes: [
    {
      uid: 'uid2',
      siteId: 112,
      customerId: 224,
      subscriptionId: 40,
      number: 'number0',
    }
  ],
};
```

