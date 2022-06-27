import { render, fireEvent, userEvent, screen } from '../../../../utils/test-utils';
import FormSearch, { FormSearchProps } from '../FormSearch';

export const renderFormSearch = (props?: Partial<FormSearchProps>) => {
  const handleInputOnChangeMock = jest.fn();
  const handleOnSearchMock = jest.fn();

  const defaultProps: FormSearchProps = {
    inputValue: 'custom-value-input',
    handleInputOnChange: handleInputOnChangeMock,
    handleOnSearch: handleOnSearchMock,
    testId: 'form-search-id',
  };

  const { inputValue, handleInputOnChange, handleOnSearch, testId } = {
    ...defaultProps,
    ...props,
  };

  const rendered = render(
    <FormSearch
      inputValue={inputValue}
      handleInputOnChange={handleInputOnChange}
      handleOnSearch={handleOnSearch}
      testId={testId}
    />,
  );

  const helpers = {
    act: {
      clickSearch: () => {
        const searchButton = rendered.getByTestId(`${testId}-button-search`);
        fireEvent.click(searchButton);
      },
      typeOnInput: async () => {
        const inputSearch = screen.getByTestId(`${testId}-input-search`);
        await userEvent.clear(inputSearch);
        await userEvent.type(inputSearch, 'github');
      },
    },
    assert: {
      formSearchHasBeenRendered: () => {
        expect(rendered.getByTestId(`${testId}-form-search`)).toBeInTheDocument();
      },
      clickSearchButtonHasBeenClicked: () => {
        expect(handleOnSearchMock).toHaveBeenCalled();
      },
      inputOnChangeHasBeenClicked: () => {
        expect(handleInputOnChangeMock).toHaveBeenCalled();
      },
    },
  };

  return { ...helpers, rendered };
};
