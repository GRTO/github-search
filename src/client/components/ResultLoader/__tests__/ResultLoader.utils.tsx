import { render } from '../../../../utils/test-utils';
import ResultLoader, { ResultLoaderProps } from '../ResultLoader';

export const renderResultLoader = (props?: Partial<ResultLoaderProps>) => {
  const defaultProps: ResultLoaderProps = {
    testId: 'result-loader-id',
  };

  const { testId } = {
    ...defaultProps,
    ...props,
  };

  const rendered = render(<ResultLoader testId={testId} />);

  const helpers = {
    act: {},
    assert: {
      resultLoaderHasBeenRendered: () => {
        expect(rendered.getByTestId(`${testId}-loader`)).toBeInTheDocument();
      },
    },
  };

  return { ...helpers, rendered };
};
