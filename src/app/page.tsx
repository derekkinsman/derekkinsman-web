import type { Metadata, ResolvingMetadata } from 'next';
import { INTERNETWEBSITE_QUERY } from '@queries/internetWebsite';
import { InternetWebsiteProps } from '@types';
import { client } from '@lib/client';
import { DynamicBlocks } from '@components/global/DynamicBlocks';

export async function generateMetadata({
  params
}: { 
  params: InternetWebsiteProps 
}) {
  const { _site } = await getInternetWebsite(params);
 
  return {
    title: _site.globalSeo.siteName,
    description: _site.globalSeo.fallbackSeo.description,
    openGraph: {
      title: _site.globalSeo.siteName,
      siteName: _site.globalSeo.siteName,
      description: _site.globalSeo.fallbackSeo.description,
      images: [
        {
          url: _site.globalSeo.fallbackSeo.image.responsiveImage.src,
          width: _site.globalSeo.fallbackSeo.image.responsiveImage.width,
          height: _site.globalSeo.fallbackSeo.image.responsiveImage.height,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: _site.globalSeo.fallbackSeo.twitterCard,
      title: _site.globalSeo.siteName,
      description: _site.globalSeo.fallbackSeo.description,
      creator: _site.globalSeo.twitterAccount,
      images: {
        url: _site.globalSeo.fallbackSeo.image.responsiveImage.src,
        alt: _site.globalSeo.siteName,
      },
    },
  };
}

export default async function Home({ 
  params 
}: { 
  params: InternetWebsiteProps 
}) {
  const { page } = await getInternetWebsite(params);

  return <>
    <DynamicBlocks blocks={page.pageComponents} />
  </>;
}

async function getInternetWebsite(params: { slug: string }) {
  const res = (await client({
    query: INTERNETWEBSITE_QUERY
  })) as InternetWebsiteProps;
  return res;
}
