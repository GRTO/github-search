import { render } from '../../../utils/test-utils';
import GitSearch, { GitSearchProps } from '../GitSearch';

export const renderGitSearch = (props?: Partial<GitSearchProps>) => {
  const defaultProps: GitSearchProps = {
    testId: 'custom-github-search-id',
  };

  const { testId } = {
    ...defaultProps,
    ...props,
  };

  const rendered = render(<GitSearch testId={testId} />);

  const helpers = {
    act: {},
    assert: {
      githubSearchHasBeenRendered: () => {
        expect(rendered.getByTestId(String(testId))).toBeInTheDocument();
      },
    },
  };

  return { ...helpers, rendered };
};
