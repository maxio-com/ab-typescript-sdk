
# Wallet Product Price Point Summary

A summary of the Wallet Product's default price point, for rendering a catalog listing without a separate price points call.

## Structure

`WalletProductPricePointSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `archivedCount` | `number \| undefined` | Optional | Number of archived price points on this Wallet Product. |
| `pricingScheme` | `string \| null \| undefined` | Optional | The default price point's pricing scheme. `null` if the Wallet Product has no default price point. |
| `tierCount` | `number \| undefined` | Optional | Number of price brackets on the default price point. A `per_unit` scheme always stores exactly one synthesized bracket, so this is `1` for `per_unit`, not `0`. |
| `entryPrice` | `string \| null \| undefined` | Optional | The unit price of the default price point's first bracket, as a decimal string. `null` if there are no brackets. |
| `finalPrice` | `string \| null \| undefined` | Optional | The unit price of the default price point's last bracket, as a decimal string. `null` if there are no brackets. |

## Example

```ts
import {
  WalletProductPricePointSummary,
} from '@maxio-com/advanced-billing-sdk';

const walletProductPricePointSummary: WalletProductPricePointSummary = {
  archivedCount: 244,
  pricingScheme: 'pricing_scheme8',
  tierCount: 30,
  entryPrice: 'entry_price8',
  finalPrice: 'final_price4',
};
```

