import { cleanSite } from '.';

import {
  removeCustomerMetadataList,
  removeSubscriptionsMetadataList,
} from '../customMetadataController/utils';
import {
  removeCustomerCustomList,
  removeSubscriptionsCustomList,
} from './customFieldsController';

const teardown = async () => {
  try {
    await removeSubscriptionsMetadataList();
    await removeSubscriptionsCustomList();
    await removeCustomerMetadataList();
    await removeCustomerCustomList();
    await cleanSite();
  } catch (error) {
    console.error('Error on Clean-up:', error);
  }
};

export default teardown;
