import { createClient } from '../config';
import { SitesController } from 'advanced-billing-sdk';

export async function cleanSite() {
  const client = createClient();
  const sitesController = new SitesController(client);
  const response = await sitesController.clearSite();
  return response;
}

export async function waitForSeconds(time: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve('success');
    }, time * 1000)
  );
}
