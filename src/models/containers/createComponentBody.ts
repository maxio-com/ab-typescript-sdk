/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  CreateEBBComponent,
  createEBBComponentSchema,
} from '../createEBBComponent';
import {
  CreateMeteredComponent,
  createMeteredComponentSchema,
} from '../createMeteredComponent';
import {
  CreateOnOffComponent,
  createOnOffComponentSchema,
} from '../createOnOffComponent';
import {
  CreatePrepaidComponent,
  createPrepaidComponentSchema,
} from '../createPrepaidComponent';
import {
  CreateQuantityBasedComponent,
  createQuantityBasedComponentSchema,
} from '../createQuantityBasedComponent';

/** This is a container type for one-of types. */
export type CreateComponentBody = CreateMeteredComponent | CreateQuantityBasedComponent | CreateOnOffComponent | CreatePrepaidComponent | CreateEBBComponent;

export const createComponentBodySchema: Schema<CreateComponentBody> = oneOf([
  createMeteredComponentSchema,
  createQuantityBasedComponentSchema,
  createOnOffComponentSchema,
  createPrepaidComponentSchema,
  createEBBComponentSchema,
]);

export namespace CreateComponentBody {
  /**
  * Validation method to narrow down union type to CreateMeteredComponent type case.
  *
  * This is Create Metered Component case.
  */
  export function isCreateMeteredComponent(value: unknown): value is CreateMeteredComponent {
    const validationResult = validateAndMap(value, createMeteredComponentSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CreateQuantityBasedComponent type case.
  *
  * This is Create Quantity Based Component case.
  */
  export function isCreateQuantityBasedComponent(value: unknown): value is CreateQuantityBasedComponent {
    const validationResult = validateAndMap(value, createQuantityBasedComponentSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CreateOnOffComponent type case.
  *
  * This is Create On/Off Component case.
  */
  export function isCreateOnOffComponent(value: unknown): value is CreateOnOffComponent {
    const validationResult = validateAndMap(value, createOnOffComponentSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CreatePrepaidComponent type case.
  *
  * This is Create Prepaid Component case.
  */
  export function isCreatePrepaidComponent(value: unknown): value is CreatePrepaidComponent {
    const validationResult = validateAndMap(value, createPrepaidComponentSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CreateEBBComponent type case.
  *
  * This is Create EBB Component case.
  */
  export function isCreateEBBComponent(value: unknown): value is CreateEBBComponent {
    const validationResult = validateAndMap(value, createEBBComponentSchema);
    return validationResult.errors === false;
  }
}
