import { abbreviateNumber } from 'js-abbreviation-number';
import { Topic as TopicType } from '../../../services/GitHubDTO';
import { CoreProps } from '../../../utils/types';

export type TopicProps = CoreProps<{
  topic: TopicType;
  onClickTopic: React.Dispatch<React.SetStateAction<string>>;
}>;

const Topic: React.FC<TopicProps> = ({ topic, onClickTopic, testId }) => {
  return (
    <div className="mt-5 mx-5 sm:mx-10 md:mx-0" data-testid={`${testId}-topic`}>
      <div data-testid={`${testId}-main-title`}>
        <h3 className="text-sm font-bold md:text-xl" data-testid={`${testId}-main-topic-name`}>
          # {topic.name}
        </h3>
        <span className="text-xs md:text-lg">Related Topics:</span>
      </div>
      <div className="flex flex-col">
        {topic.relatedTopics.map((relatedTopic) => (
          <div key={relatedTopic.id} className="flex flex-row gap-5 my-1">
            <div
              className="text-sm text-blue-600 bg-blue-100 cursor-pointer px-3 rounded-3xl md:text-lg hover:text-gray-50 hover:bg-blue-600"
              data-testid={`${relatedTopic.id}-${testId}-related-topic-name`}
              onClick={() => onClickTopic(relatedTopic.name.toLocaleLowerCase())}
            >
              {relatedTopic.name}
            </div>
            <div
              className="text-sm md:text-lg"
              title={String(relatedTopic.stargazerCount)}
              data-testid={`${relatedTopic.id}-${testId}-related-topic-stargazer-count`}
            >
              {abbreviateNumber(relatedTopic.stargazerCount, 1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
