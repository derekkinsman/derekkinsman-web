import { INTERNETWEBSITE_QUERY } from '@queries/internetWebsite';
import { InternetWebsiteProps } from '@types';
import { client } from '@lib/client';
import { DynamicBlocks } from '@components/global/DynamicBlocks';

export default async function Home({ 
  params 
}: { 
  params: InternetWebsiteProps 
}) {
  const { page, _site } = await getInternetWebsite(params);

  return <>
    <DynamicBlocks blocks={page.pageComponents} />
  </>;
}

async function getInternetWebsite(params: { slug: string }) {
  const res = (await client({
    query: INTERNETWEBSITE_QUERY,
    // variables: { slug: params.slug },
  })) as InternetWebsiteProps;
  return res;
}
