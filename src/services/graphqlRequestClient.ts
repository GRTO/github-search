import { GraphQLClient } from 'graphql-request';

const requestHeaders = {
  authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
};

const graphqlRequestClient = new GraphQLClient(process.env.GITHUB_GRAPHQL_ENDPOINT as string, {
  headers: requestHeaders,
});

export default graphqlRequestClient;
