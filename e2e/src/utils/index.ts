import { createClient } from '../config';
import { SitesController } from '../../../src/controllers/sitesController';

const DELAY_AFTER_CLEAN = 1000;
// Based on https://developers.chargify.com/docs/api-docs/c912e634019c9-clear-site-data
// doc recommendation added small delay a site verification or read retry command
export async function cleanSite() {
  return new Promise((resolve, reject) => {
    const client = createClient();
    const sitesController = new SitesController(client);
    sitesController
      .clearSite()
      .then((response) => {
        setTimeout(() => {
          resolve(response);
        }, DELAY_AFTER_CLEAN);
      })
      .catch((error) => reject(error));
  });
}
