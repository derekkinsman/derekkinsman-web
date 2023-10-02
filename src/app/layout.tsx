import { INTERNETWEBSITE_LOCALE_QUERY } from '../queries/internetWebsite';
import { InternetWebsiteLocaleProps } from '@types';
import { client } from '../lib/client';
import '@styles/_base.scss';

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const { _site } = await getInternetWebsite();
  return <html lang={_site.locales}>
    <body>{children}</body>
  </html>;
};

async function getInternetWebsite() {
  const res = (await client({
    query: INTERNETWEBSITE_LOCALE_QUERY
  })) as InternetWebsiteLocaleProps;
  return res;
}
