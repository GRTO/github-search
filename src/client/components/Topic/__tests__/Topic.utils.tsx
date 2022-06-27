import { githubFixtureDTO } from '../../../../services/githubDTO.fixture';
import { fireEvent, render } from '../../../../utils/test-utils';
import Topic, { TopicProps } from '../Topic';

export const renderTopic = (props?: Partial<TopicProps>) => {
  const onClickTopicMock = jest.fn();

  const defaultProps: TopicProps = {
    topic: githubFixtureDTO(),
    onClickTopic: onClickTopicMock,
    testId: 'topic-id',
  };

  const { topic, onClickTopic, testId } = {
    ...defaultProps,
    ...props,
  };

  const rendered = render(<Topic topic={topic} onClickTopic={onClickTopic} testId={testId} />);

  const helpers = {
    act: {
      clickRelatedTopic: () => {
        const realtedTopichButton = rendered.getByTestId(
          `${topic.relatedTopics[0].id}-${testId}-related-topic-name`,
        );
        fireEvent.click(realtedTopichButton);
      },
    },
    assert: {
      topicHasBeenRendered: () => {
        expect(rendered.getByTestId(`${testId}-topic`)).toBeInTheDocument();
      },
      topicMainTitleHasBeenRendered: () => {
        expect(rendered.getByTestId(`${testId}-main-topic-name`)).toBeInTheDocument();
      },
      topicRelatedHasBeenRendered: () => {
        expect(
          rendered.getByTestId(`${topic.relatedTopics[0].id}-${testId}-related-topic-name`),
        ).toBeInTheDocument();
      },
      topicRelatedHasBeenClicked: () => {
        expect(onClickTopicMock).toHaveBeenCalled();
      },
    },
  };

  return { ...helpers, rendered };
};
