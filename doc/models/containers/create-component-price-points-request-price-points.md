
# Create Component Price Points Request Price Points

## Class Name

`CreateComponentPricePointsRequestPricePoints`

## Cases

| Type |
|  --- |
| [`CreateComponentPricePoint`](../../../doc/models/create-component-price-point.md) |
| [`CreatePrepaidUsageComponentPricePoint`](../../../doc/models/create-prepaid-usage-component-price-point.md) |

## CreateComponentPricePoint

### Initialization Code

#### Example

```ts
const value: CreateComponentPricePointsRequestPricePoints = {
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
const value: CreateComponentPricePointsRequestPricePoints = {
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

