/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core.js';
import {
  SubscriptionMigrationPreviewRequest,
  subscriptionMigrationPreviewRequestSchema,
} from '../models/subscriptionMigrationPreviewRequest.js';
import {
  SubscriptionMigrationPreviewResponse,
  subscriptionMigrationPreviewResponseSchema,
} from '../models/subscriptionMigrationPreviewResponse.js';
import {
  SubscriptionProductMigrationRequest,
  subscriptionProductMigrationRequestSchema,
} from '../models/subscriptionProductMigrationRequest.js';
import {
  SubscriptionResponse,
  subscriptionResponseSchema,
} from '../models/subscriptionResponse.js';
import { number, optional } from '../schema.js';
import { BaseController } from './baseController.js';
import { ErrorListResponseError } from '../errors/errorListResponseError.js';

export class SubscriptionProductsController extends BaseController {
  /**
   * Migrates a subscription to a different product.
   *
   * To create a migration, you must pass the `product_id` or `product_handle` in the object when you
   * send a POST request. You can also pass either a `product_price_point_id` or
   * `product_price_point_handle` to choose which price point the subscription is moved to. If no price
   * point identifier is passed, the subscription is moved to the product's default price point. The
   * response is the updated subscription.
   *
   * ## Valid Subscriptions
   *
   * Subscriptions should be in the `active` or `trialing` state to be migrated.
   *
   * (For backwards compatibility reasons, it is possible to migrate a subscription that is in the
   * `trial_ended` state via the API, however this is not recommended.  Since `trial_ended` is an end-of-
   * life state, the subscription should be canceled, the product changed, and then the subscription can
   * be reactivated.)
   *
   * For more information, see [Product Changes and Migrations](https://docs.maxio.com/hc/en-
   * us/articles/24252069837581-Product-Changes-and-Migrations).
   *
   * ## Failed Migrations
   *
   * Important note: One of the most common ways that a migration can fail is when the attempt is made to
   * migrate a subscription to its current product.
   *
   * ## 3D Secure (3DS) Authentication post-authentication flow
   *
   * When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the
   * request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with
   * an action_link that will direct the customer through 3DS Authentication.
   *
   * See the [3D Secure Post-Authentication Flow](https://docs.maxio.com/hc/en-us/articles/44277749524365-
   * 3D-Secure-Post-Authentication-Flow) article in the product documentation to learn how to manage the
   * redirect flow.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param body
   * @return Response from the API call
   */
  async migrateSubscriptionProduct(
    subscriptionId: number,
    body?: SubscriptionProductMigrationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(subscriptionProductMigrationRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/migrations.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionResponseSchema, requestOptions);
  }

  /**
   * Previews the charges resulting from migrating a subscription to a different product.
   *
   * ## Previewing a future date
   * It is also possible to preview the migration for a date in the future, as long as it's still within
   * the subscription's current billing period, by passing a `proration_date` along with the request (e.g.
   * , `"proration_date": "2020-12-18T18:25:43.511Z"`).
   *
   * This will calculate the prorated adjustment, charge, payment and credit applied values assuming the
   * migration is done at that date in the future as opposed to right now.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param body
   * @return Response from the API call
   */
  async previewSubscriptionProductMigration(
    subscriptionId: number,
    body?: SubscriptionMigrationPreviewRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionMigrationPreviewResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(subscriptionMigrationPreviewRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/migrations/preview.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      subscriptionMigrationPreviewResponseSchema,
      requestOptions
    );
  }
}
