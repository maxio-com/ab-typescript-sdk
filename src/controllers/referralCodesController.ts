/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  ReferralValidationResponse,
  referralValidationResponseSchema,
} from '../models/referralValidationResponse.js';
import { string } from '../schema.js';
import { BaseController } from './baseController.js';
import { SingleStringErrorResponseError } from '../errors/singleStringErrorResponseError.js';

export class ReferralCodesController extends BaseController {
  /**
   * Validates whether a referral code is valid and applicable within your site. This method is useful
   * for validating referral codes that are entered by a customer.
   *
   * For more information, see [Understanding Referrals](https://docs.maxio.com/hc/en-
   * us/articles/24286981223693-Understanding-Referrals) in the product documentation.
   *
   * @param code The referral code you are trying to validate
   * @return Response from the API call
   */
  async validateReferralCode(
    code: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReferralValidationResponse>> {
    const req = this.createRequest('GET', '/referral_codes/validate.json');
    const mapped = req.prepareArgs({ code: [code, string()] });
    req.query('code', mapped.code, commaPrefix);
    req.throwOn(
      404,
      SingleStringErrorResponseError,
      true,
      'Invalid referral code.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(referralValidationResponseSchema, requestOptions);
  }
}
