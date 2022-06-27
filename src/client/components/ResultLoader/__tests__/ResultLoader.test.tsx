import { cleanup } from '../../../../utils/test-utils';
import { renderResultLoader } from './ResultLoader.utils';

describe('ResultLoader', () => {
  afterEach(cleanup);

  test('it should render', () => {
    const { assert } = renderResultLoader();

    assert.resultLoaderHasBeenRendered();
  });
});
