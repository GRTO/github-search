export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

export interface Repository {
  // TBD
}

export interface RepositoryEdge {
  cursor: string;
  node: Repository;
}

export interface RepositoryConnection {
  edges: Array<RepositoryEdge>;
  nodes: Array<Repository>;
  pageInfo: PageInfo;
  totalCount: number;
  totalDiskUsage: number;
}

export interface User {
  avatarUrl: string;
  bio: string;
  bioHTML: string;
  company: string;
  createdAt: string;
  email: string;
  id: string;
}
export interface StargazerEdge {
  cursor: string;
  node: User;
  starredAt: string;
}

export interface StargazerConnection {
  edges: Array<StargazerEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
  totalCount: number;
}

export interface Topic {
  id: string;
  name: string;
  relatedTopics: Array<Topic>;
  repositories: Array<RepositoryConnection>;
  stargazerCount: number;
  stargazers: StargazerConnection;
  viewerHasStarred: boolean;
}
