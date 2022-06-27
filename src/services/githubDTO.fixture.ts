import { fixtureFactory } from '../utils/fixture';
import { PageInfo, StargazerConnection, Topic } from './GitHubDTO';

export const pageInfoFixture = fixtureFactory<PageInfo>({
  endCursor: 'endCursor',
  hasNextPage: true,
  hasPreviousPage: false,
  startCursor: 'startCursor',
});

export const stargazersFixture = fixtureFactory<StargazerConnection>({
  edges: [],
  nodes: [],
  totalCount: 10000,
  pageInfo: pageInfoFixture(),
});

export const githubFixtureDTO = fixtureFactory<Topic>({
  id: 'topic-id',
  name: 'custom-topic',
  repositories: [],
  stargazerCount: 10000,
  viewerHasStarred: false,
  stargazers: stargazersFixture(),
  relatedTopics: [],
});


