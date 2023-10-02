import { gql } from 'graphql-request';
import { GLOBAL_QUERY } from './global';
import {
  Biography,
  Copyright,
  Elsewhere,
  ImageParams,
  Kindness,
  Masthead,
  Place
} from './fragments';

export const INTERNETWEBSITE_LOCALE_QUERY = gql`
  query HomePage {
    _site {
      locales
    }
  }
`;

export const INTERNETWEBSITE_QUERY = gql`
  query HomePage {
    ${GLOBAL_QUERY}
    page: internetWebsite {
      pageComponents {
        __typename
        ... on BiographyRecord {
          ...Biography
        }
        ... on CopyrightRecord {
          ...Copyright
        }
        ... on ElsewhereRecord {
          ...Elsewhere
        }
        ... on KindnessRecord {
          ...Kindness
        }
        ... on MastheadRecord {
          ...Masthead
        }
        ... on PlaceRecord {
          ...Place
        }
      }
    }
  }
  ${Biography}
  ${Copyright}
  ${Elsewhere}
  ${ImageParams}
  ${Kindness}
  ${Masthead}
  ${Place}
`;
