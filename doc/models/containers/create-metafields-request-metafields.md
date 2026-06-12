
# Create Metafields Request Metafields

## Class Name

`CreateMetafieldsRequestMetafields`

## Cases

| Type |
|  --- |
| [`CreateMetafield`](../../../doc/models/create-metafield.md) |
| [`CreateMetafield[]`](../../../doc/models/create-metafield.md) |

## CreateMetafield

### Initialization Code

#### Example

```ts
const value: CreateMetafieldsRequestMetafields = {
  name: 'my_field',
  scope: {
    csv: IncludeOption.Exclude,
    invoices: IncludeOption.Exclude,
    statements: IncludeOption.Exclude,
    portal: IncludeOption.Exclude,
    publicShow: IncludeOption.Exclude,
    publicEdit: IncludeOption.Exclude,
  },
  inputType: MetafieldInput.Text,
  mEnum: [
    'string'
  ],
};
```

## CreateMetafield[]

### Initialization Code

#### Example

```ts
const value: CreateMetafieldsRequestMetafields = [
  {
}
];
```

