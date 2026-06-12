
# Create Component Price Point Request Price Point

## Class Name

`CreateComponentPricePointRequestPricePoint`

## Cases

| Type |
|  --- |
| [`CreateComponentPricePoint`](../../../doc/models/create-component-price-point.md) |
| [`CreatePrepaidUsageComponentPricePoint`](../../../doc/models/create-prepaid-usage-component-price-point.md) |

## CreateComponentPricePoint

### Initialization Code

#### Example

```ts
const value: CreateComponentPricePointRequestPricePoint = {
  name: 'name0',
  pricingScheme: PricingScheme.PerUnit,
  prices: [
    {
      startingQuantity: 242,
      unitPrice: 23.26,
    }
  ],
  useSiteExchangeRate: true,
};
```

## CreatePrepaidUsageComponentPricePoint

### Initialization Code

#### Example

```ts
const value: CreateComponentPricePointRequestPricePoint = {
  name: 'name0',
  pricingScheme: PricingScheme.PerUnit,
  prices: [
    {
      startingQuantity: 242,
      unitPrice: 23.26,
    }
  ],
  overagePricing: {
    pricingScheme: PricingScheme.Stairstep,
  },
  useSiteExchangeRate: true,
};
```

