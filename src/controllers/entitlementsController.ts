/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core.js';
import {
  AggregatedEntitlementsResponse,
  aggregatedEntitlementsResponseSchema,
} from '../models/aggregatedEntitlementsResponse.js';
import { number } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError.js';

export class EntitlementsController extends BaseController {
  /**
   * Returns every feature a subscription is entitled to, collapsed into one entry per feature key and
   * periodicity window across all products and components on the subscription. A `usage_limit` feature
   * granted with two different periodicities comes back as two entries sharing one `feature_key`, each
   * identified by its own `periodicity_key`.
   *
   * When more than one product or component grants the same feature key and periodicity, the values are
   * combined:
   * - **`access_right`** features are combined with a boolean OR. If any contributor grants access, the
   * aggregate is `true`. `source_products` only lists the contributors that granted `true`.
   * - **`usage_limit`** features are summed across every contributor sharing the same periodicity window.
   * `source_products` lists every contributor. Grants with different periodicities are not summed
   * together. Each periodicity is returned as a separate entry.
   * - **`service_right`** features are not combined: one contributor's value wins. Do not rely on which
   * one when several grant the same feature key.
   *
   * `enabled` reflects both the aggregated value and the subscription's state. The field is `false`
   * whenever the subscription is not in a live state (`active`, `trialing`, `assessing`, `past_due`,
   * `soft_failure`), regardless of the aggregated value. Entitlements deliberately stay enabled through
   * dunning.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @return Response from the API call
   */
  async readSubscriptionEntitlements(
    subscriptionId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AggregatedEntitlementsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/entitlements.json`;
    req.throwOn(403, ErrorListResponseError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(aggregatedEntitlementsResponseSchema, requestOptions);
  }
}
