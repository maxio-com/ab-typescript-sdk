import { cleanSite } from '.';

const teardown = async () => {
  console.log('end it');
  cleanSite();
};

export default teardown;
