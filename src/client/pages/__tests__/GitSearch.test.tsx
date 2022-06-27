import { cleanup } from '../../../utils/test-utils';
import { renderGitSearch } from './GitSearch.utils';

describe('GitSearch', () => {
  afterEach(cleanup);

  test('it should render', async () => {
    const { assert } = renderGitSearch();

    assert.githubSearchHasBeenRendered();
  });
});
