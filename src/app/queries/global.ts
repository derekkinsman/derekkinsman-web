import { gql } from 'graphql-request';

export const GLOBAL_QUERY = gql`
  _site {
    favicon {
      url
    }
    globalSeo {
      siteName
      titleSuffix
      fallbackSeo {
        description
        image {
          responsiveImage(imgixParams: {w: 600}) {
            src
          }
        }
      }
    }
    locales
  }
`;
