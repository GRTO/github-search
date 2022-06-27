import { gql } from 'graphql-request';
import { GraphQLResponse } from 'graphql-request/dist/types';
import { useQuery, UseQueryResult } from 'react-query';
import { Topic } from './GitHubDTO';
import graphqlRequestClient from './graphqlRequestClient';

const GET_TOPIC = gql`
  query ($name: String!) {
    topic(name: $name) {
      id
      name
      stargazerCount
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;

export const useTopic = (
  topic: string,
): Pick<UseQueryResult<Topic, Error>, 'data' | 'isLoading' | 'error' | 'refetch'> => {
  const { isLoading, error, data, refetch } = useQuery<GraphQLResponse<Topic>, Error, Topic>(
    [topic],
    async (context) => {
      const { queryKey } = context;
      const [topic] = queryKey;
      return await graphqlRequestClient.request(GET_TOPIC, { name: topic });
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
      select: (res) => res.topic,
    },
  );

  return { isLoading, error, data, refetch };
};
