/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';
import {
  RenewalPreviewComponentComponentId,
  renewalPreviewComponentComponentIdSchema,
} from './containers/renewalPreviewComponentComponentId';
import {
  RenewalPreviewComponentPricePointId,
  renewalPreviewComponentPricePointIdSchema,
} from './containers/renewalPreviewComponentPricePointId';

export interface RenewalPreviewComponent {
  /** Either the component's Chargify id or its handle prefixed with `handle:` */
  componentId?: RenewalPreviewComponentComponentId;
  /**
   * The quantity for which you wish to preview billing. This is useful if you want to preview a predicted, higher usage value than is currently present on the subscription.
   * This quantity represents:
   * - Whether or not an on/off component is enabled - use 0 for disabled or 1 for enabled
   * - The desired allocated_quantity for a quantity-based component
   * - The desired unit_balance for a metered component
   * - The desired metric quantity for an events-based component
   */
  quantity?: number;
  /** Either the component price point's Chargify id or its handle prefixed with `handle:` */
  pricePointId?: RenewalPreviewComponentPricePointId;
}

export const renewalPreviewComponentSchema: Schema<RenewalPreviewComponent> = object(
  {
    componentId: [
      'component_id',
      optional(renewalPreviewComponentComponentIdSchema),
    ],
    quantity: ['quantity', optional(number())],
    pricePointId: [
      'price_point_id',
      optional(renewalPreviewComponentPricePointIdSchema),
    ],
  }
);
