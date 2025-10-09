import { GraphQLClient } from 'graphql-request';
export const client = ({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: {
  query: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  variables?: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}) => {
  const headers: {
    authorization: string;
    'X-Include-Drafts'?: string;
    'X-Exclude-Invalid'?: string;
  } = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers });
  return client.request(query, variables);
};
