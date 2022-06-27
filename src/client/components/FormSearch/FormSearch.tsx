import { CoreProps } from '../../../utils/types';

/* eslint-disable no-unused-vars */
export type FormSearchProps = CoreProps<{
  inputValue: string;
  handleInputOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleOnSearch: () => void;
}>;

const FormSearch: React.FC<FormSearchProps> = ({
  inputValue,
  handleInputOnChange,
  handleOnSearch,
  testId,
}) => (
  <form className="flex flex-col gap-3 md:flex-row" data-testid={`${testId}-form-search`}>
    <input
      type="search"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Search any topic"
      onChange={handleInputOnChange}
      value={inputValue}
      aria-label={inputValue}
      data-testid={`${testId}-input-search`}
    />
    <button
      type="button"
      className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      onClick={handleOnSearch}
      data-testid={`${testId}-button-search`}
    >
      Search
    </button>
  </form>
);

export default FormSearch;
