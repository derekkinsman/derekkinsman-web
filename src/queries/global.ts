import { gql } from 'graphql-request';

export const GLOBAL_QUERY = gql`
  _site {
    favicon {
      url
    }
    globalSeo {
      siteName
      twitterAccount
      titleSuffix
      fallbackSeo {
        description
        twitterCard
        title
        image {
          responsiveImage(imgixParams: {w: 600}) {
            ...ImageParams
          }
        }
      }
    }
    locales
  }
`;
