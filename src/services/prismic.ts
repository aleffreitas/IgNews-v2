import Prismic from '@prismicio/client';

export function getPrismicClient(request?: unknown){
  const prismic = Prismic.createClient(
    process.env.PRISMIC_ENDPOINT,
    {
      // request,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
  )
  return prismic;
}