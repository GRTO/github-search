/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useTopic } from '../../services/graphqlQuery';
import { CoreProps } from '../../utils/types';
import { FormSearch, ResultContainer } from '../components';

export type GitSearchProps = CoreProps<{}>;

const GitSearch: React.FC<GitSearchProps> = ({ testId }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');

  const { data, error, isLoading, refetch } = useTopic(searchInput);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleOnClick = () => {
    setSearchInput(inputValue);
  };

  useEffect(() => {
    refetch();
  }, [searchInput]);

  return (
    <div className="mx-auto max-w-7xl" data-testid={testId}>
      <div className="flex justify-center mt-5 md:mt-10">
        <FormSearch
          inputValue={inputValue}
          handleInputOnChange={handleChange}
          handleOnSearch={handleOnClick}
          testId={testId}
        />
      </div>
      <ResultContainer
        data={data}
        isLoading={isLoading}
        error={error}
        onClickTopic={setSearchInput}
        testId={testId}
      />
    </div>
  );
};

export default GitSearch;
