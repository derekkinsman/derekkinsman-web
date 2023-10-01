import { gql } from 'graphql-request';

export const Biography = gql`
  fragment Biography on BiographyRecord {
    id
    content {
      value
    }
  }
`;

export const Copyright = gql`
  fragment Copyright on CopyrightRecord {
    id
    content {
      value
    }
  }
`;

export const Elsewhere = gql`
  fragment Elsewhere on ElsewhereRecord {
    id
    title
    content {
      title
      description {
        value
      }
      backgroundImage {
        responsiveImage(imgixParams: { w: 1500 }) {
          ...ImageParams
        }
      }
    }
  }
`;

export const Kindness = gql`
  fragment Kindness on KindnessRecord {
    id
    title
    content {
      title
      description
      link
      socialId
    }
  }
`;

export const Masthead = gql`
  fragment Masthead on MastheadRecord {
    id
    title
    portrait {
      responsiveImage(imgixParams: { w: 1500 }) {
        ...ImageParams
      }
    }
  }
`;

export const Place = gql`
  fragment Place on PlaceRecord {
    id
    title
    description {
      value
    }
    content {
      title
      id
      field
      link
      active
    }
  }
`;

export const ImageParams = gql`
  fragment ImageParams on ResponsiveImage {
    alt
    aspectRatio
    base64
    height
    sizes
    src
    title
    width
  }
`;
