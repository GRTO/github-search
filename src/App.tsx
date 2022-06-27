/* eslint-disable react-hooks/exhaustive-deps */
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GitSearch from './client/pages/GitSearch';

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 5 * 1000 } } });

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    <GitSearch testId="github-search" />
  </QueryClientProvider>
);

export default App;
