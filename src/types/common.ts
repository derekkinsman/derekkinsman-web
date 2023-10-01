export interface InternetWebsiteProps {
  page: PageProps;
  _site: {
    favicon: {
      url: string;
    };
    globalSeo: {
      siteName: string;
      titleSuffix: string;
      fallbackSeo: {
        description: string;
        image: {
          responsiveImage: {
            src: string;
          };
        };
      };
    };
  };
  slug: string;
}

export interface PageProps {
  pageComponents: CommonComponentProps[] | any[];
}

export interface CommonComponentProps {
  __typename: string;
  id: string;
}

export interface ElsewhereLinkProps {
  socialId: string;
  title: string;
  description: string;
  link: string;
}

export interface KindnessLinkProps {
  socialId: string;
  title: string;
  description: string;
  link: string;
}

export interface PlaceLinkProps {
  id: string;
  title: string;
  link: string;
  field: string;
  active: boolean;
}

export interface ImageProps {
  responsiveImage: {
    alt: string;
    aspectRatio: number;
    base64: string;
    height: number;
    sizes: string;
    src: string;
    title: string;
    width: number;
  };
}
