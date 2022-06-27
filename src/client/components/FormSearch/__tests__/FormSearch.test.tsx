import { cleanup } from '../../../../utils/test-utils';
import { renderFormSearch } from './FormSearch.utils';

describe('FormSearch', () => {
  afterEach(cleanup);

  test('it should render', () => {
    const { assert } = renderFormSearch();

    assert.formSearchHasBeenRendered();
  });

  test('it should call the search button', async () => {
    const { assert, act } = renderFormSearch();

    await act.clickSearch();
    assert.clickSearchButtonHasBeenClicked();
  });

  test('it should call the on change input function', async () => {
    const { assert, act } = renderFormSearch();

    await act.typeOnInput();
    assert.inputOnChangeHasBeenClicked();
  });
});
