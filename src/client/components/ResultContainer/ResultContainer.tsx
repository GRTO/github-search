import React from 'react';
import { Topic as TopicType } from '../../../services/GitHubDTO';
import { Topic, ResultLoader } from '..';
import { CoreProps } from '../../../utils/types';

export type ResultContainerProps = CoreProps<{
  data?: TopicType;
  isLoading: boolean;
  error: Error | null;
  onClickTopic: React.Dispatch<React.SetStateAction<string>>;
}>;

const ResultContainer: React.FC<ResultContainerProps> = ({
  data,
  isLoading,
  error,
  onClickTopic,
  testId,
}) => {
  if (isLoading) return <ResultLoader testId={testId} />;

  if (error)
    return (
      <div className="flex justify-center font-bold mt-5" data-testid={`${testId}-error-reponse`}>
        There was an error
      </div>
    );

  if (!data)
    return (
      <div className="flex justify-center font-bold mt-5" data-testid={`${testId}-no-data`}>
        No data has been searched
      </div>
    );

  return <Topic topic={data} onClickTopic={onClickTopic} testId={testId} />;
};

export default ResultContainer;
