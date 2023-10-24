/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema, string } from '../schema';
import { CreditType, creditTypeSchema } from './creditType';
import { ItemCategory, itemCategorySchema } from './itemCategory';

export interface UpdateComponent {
  handle?: string;
  /** The name of the Component, suitable for display on statements. i.e. Text Messages. */
  name?: string;
  /** The description of the component. */
  description?: string | null;
  accountingCode?: string;
  /** Boolean flag describing whether a component is taxable or not. */
  taxable?: boolean;
  /** A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. */
  taxCode?: string | null;
  /** One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other */
  itemCategory?: ItemCategory;
  displayOnHostedPage?: boolean;
  /** The type of charge to be applied when a component is upgraded. Valid values are: `prorated`, `full`, `none`. */
  upgradeCharge?: CreditType;
}

export const updateComponentSchema: Schema<UpdateComponent> = object({
  handle: ['handle', optional(string())],
  name: ['name', optional(string())],
  description: ['description', optional(nullable(string()))],
  accountingCode: ['accounting_code', optional(string())],
  taxable: ['taxable', optional(boolean())],
  taxCode: ['tax_code', optional(nullable(string()))],
  itemCategory: ['item_category', optional(itemCategorySchema)],
  displayOnHostedPage: ['display_on_hosted_page', optional(boolean())],
  upgradeCharge: ['upgrade_charge', optional(creditTypeSchema)],
});
