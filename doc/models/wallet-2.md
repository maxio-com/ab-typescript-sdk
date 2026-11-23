
# Wallet 2

## Structure

`Wallet2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | A merchant-facing label for the wallet. Surrounding spaces are stripped; a blank or `null` value clears it.<br><br>**Constraints**: *Maximum Length*: `255` |

## Example

```ts
import { Wallet2 } from '@maxio-com/advanced-billing-sdk';

const wallet2: Wallet2 = {
  name: 'name2',
};
```

