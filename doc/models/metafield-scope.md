
# Metafield Scope

Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings.

## Structure

`MetafieldScope`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `csv` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from the csv export. |
| `invoices` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from invoices. |
| `statements` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from statements. |
| `portal` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from the portal. |
| `publicShow` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields used in [Embeddable Components](page:development-tools/embeddable-components/overview) from being viewable by your ecosystem. |
| `publicEdit` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields used in [Embeddable Components](page:development-tools/embeddable-components/overview) from being editable by your ecosystem. |
| `hosted` | `string[] \| undefined` | Optional | - |

## Example

```ts
import {
  IncludeOption,
  MetafieldScope,
} from '@maxio-com/advanced-billing-sdk';

const metafieldScope: MetafieldScope = {
  csv: IncludeOption.Exclude,
  invoices: IncludeOption.Exclude,
  statements: IncludeOption.Exclude,
  portal: IncludeOption.Exclude,
  publicShow: IncludeOption.Exclude,
};
```

