
# Purchase

## Structure

`Purchase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `quantity` | [`PurchaseQuantity`](../../doc/models/containers/purchase-quantity.md) | Required | This is a container for one-of cases. |
| `pricePointId` | `number \| undefined` | Optional | The price point to purchase at. Must belong to the wallet's billing product. Defaults to the `price_point_id` set on the wallet. |
| `memo` | `string \| null \| undefined` | Optional | (Optional) A note recorded on the resulting grant's ledger row.<br><br>**Constraints**: *Maximum Length*: `255` |

## Example

```ts
import { Purchase } from '@maxio-com/advanced-billing-sdk';

const purchase: Purchase = {
  quantity: 'String5',
  pricePointId: 20,
  memo: 'memo2',
};
```

