import { ComponentsController, PricingScheme } from 'advanced-billing-sdk';
import { createClient } from '../config';
import { uid } from 'uid';

export async function createComponent({
  productFamilyId,
}: {
  productFamilyId: number;
}) {
  const client = createClient();
  const componentsController = new ComponentsController(client);
  const meteredComponent = {
    productFamilyId,
    name: 'test',
    description: 'test',
    quantity: 1,
    unitName: 'test',
    price: 1,
    handle: uid(),
    pricingScheme: PricingScheme.PerUnit,
    unitPrice: 1,
  };
  const response = await componentsController.createMeteredComponent(
    productFamilyId.toString(),
    {
      meteredComponent,
    }
  );
  return response.result;
}
