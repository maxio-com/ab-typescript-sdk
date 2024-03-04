import { ReasonCodesController } from 'advanced-billing-sdk';
import { createClient } from '../config';

export const deleteAllReasonCodes = async () => {
  const client = createClient();
  const reasonCodesController = new ReasonCodesController(client);

  const responseAll = (await reasonCodesController.listReasonCodes({})).result;
  const reasonCodeIds = responseAll
    .map((item) => item.reasonCode.id || 0)
    .filter((id) => id != 0);
  const promisesDelete = await reasonCodeIds.map(
    async (id) => await reasonCodesController.deleteReasonCode(id)
  );
  await Promise.all(promisesDelete);
};
