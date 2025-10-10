import type { Metadata, ResolvingMetadata } from 'next';
import { INTERNETWEBSITE_QUERY } from '@queries/internetWebsite';
import { InternetWebsiteProps } from '@types';
import { client } from '@lib/client';
import { DynamicBlocks } from '@components/global/DynamicBlocks';
import { ButtonDownEmail } from '@components/global/ButtonDownEmail';

export async function generateMetadata() {
  const { _site } = await getInternetWebsite();
 
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

const ButtonDownData = {
  __typename: 'Buttondown',
  id: '001',
  ButtonDown: {
    action: 'https://buttondown.email/api/emails/embed-subscribe/derekkinsman',
    formLabel: 'Want some occassional mail?',
    referrerLink: 'https://buttondown.email/refer/derekkinsman',
    referrerLabel: 'Powered by Buttondown.'
  }
};

export default async function Home() {
  const { page } = await getInternetWebsite();

  return <>
    <DynamicBlocks blocks={page.pageComponents} />
    {/* <ButtonDownEmail {...ButtonDownData} /> */}
  </>;
}

async function getInternetWebsite() {
  const res = (await client({
    query: INTERNETWEBSITE_QUERY
  })) as InternetWebsiteProps;
  return res;
}
