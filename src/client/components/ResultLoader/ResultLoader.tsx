import React from 'react';
import { CoreProps } from '../../../utils/types';

export type ResultLoaderProps = CoreProps<{}>;

const ResultLoader: React.FC<ResultLoaderProps> = ({ testId }) => (
  <div className="mt-5" data-testid={`${testId}-loader`}>
    <div className="flex animate-pulse flex-col h-full justify-center gap-y-5">
      <div className="w-36 bg-gray-300 h-3 rounded-md" />
      <div className="w-24 bg-gray-300 h-2 rounded-md" />
      <div className="flex flex-row gap-3">
        <div className="w-20 bg-gray-300 h-4 rounded-md" />
        <div className="w-10 bg-gray-300 h-4 rounded-md" />
      </div>
      <div className="flex flex-row gap-3">
        <div className="w-20 bg-gray-300 h-4 rounded-md" />
        <div className="w-10 bg-gray-300 h-4 rounded-md" />
      </div>
      <div className="flex flex-row gap-3">
        <div className="w-20 bg-gray-300 h-4 rounded-md" />
        <div className="w-10 bg-gray-300 h-4 rounded-md" />
      </div>
      <div className="flex flex-row gap-3">
        <div className="w-20 bg-gray-300 h-4 rounded-md" />
        <div className="w-10 bg-gray-300 h-4 rounded-md" />
      </div>
    </div>
  </div>
);

export default ResultLoader;
