module.exports = {
  preset: 'ts-jest',
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,tsx,ts}',
    '!**/utils/test/**',
    '!**/*.test.tsx.snap',
    '!**/*.utils.(tsx|ts|js|jsx)',
    '!**/*.test.(tsx|ts|js|jsx)',
  ],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '!**/__tests__/**/*.utils.+(ts|tsx|js)'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./test/jest.setup.js'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
      isolatedModules: true,
    },
  },
};
