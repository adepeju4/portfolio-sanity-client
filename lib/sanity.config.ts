import client from '../env/client.mjs';

export const config = {
  /*
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   */
  dataset: client.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: client.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  apiVersion: '2021-10-21',
  /*
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   */
  useCdn: process.env.NODE_ENV === 'production',
};

export default { config };
