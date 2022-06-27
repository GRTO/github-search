import { githubFixtureDTO } from '../../../../services/githubDTO.fixture';
import { cleanup } from '../../../../utils/test-utils';
import { renderTopic } from './Topic.utils';

describe('Topic', () => {
  afterEach(cleanup);

  test('it should render', async () => {
    const { assert } = renderTopic();

    assert.topicHasBeenRendered();
    assert.topicMainTitleHasBeenRendered();
  });

  test('first topic related has to be rendered', async () => {
    const topic = githubFixtureDTO({
      relatedTopics: [githubFixtureDTO({ id: 'related-topic-2', name: 'Topic 2' })],
    });
    const { assert } = renderTopic({ topic });

    assert.topicHasBeenRendered();
    assert.topicMainTitleHasBeenRendered();
    assert.topicRelatedHasBeenRendered();
  });

  test('first topic related has to clicked', async () => {
    const topic = githubFixtureDTO({
      relatedTopics: [githubFixtureDTO({ id: 'related-topic-2', name: 'Topic 2' })],
    });
    const { assert, act } = renderTopic({ topic });

    act.clickRelatedTopic();
    assert.topicRelatedHasBeenClicked();
  });
});
