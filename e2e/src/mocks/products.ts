import { CreateOrUpdateProduct, IntervalUnit } from 'advanced-billing-sdk';

export const product: CreateOrUpdateProduct = {
  name: 'subscriptions-engage03',
  //Handle should be unique
  handle: 'unique-handle',
  description: 'Description print',
  priceInCents: BigInt(1000),
  interval: 1,
  intervalUnit: IntervalUnit.Month,
};
