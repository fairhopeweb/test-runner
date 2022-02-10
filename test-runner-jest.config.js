// !!! This file is used as an override to the test-runner configuration for this repo only !!!
// If you want to create your own override for your project, use playwright/test-runner-jest.config.js as base instead

const { getJestConfig } = require('./dist/cjs');

module.exports = {
  ...getJestConfig(),
  cacheDirectory: 'node_modules/.cache/storybook/test-runner',
  transform: {
    '^.+\\.stories\\.[jt]sx?$': './playwright/transform',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  globalSetup: './playwright/global-setup.js',
  globalTeardown: './playwright/global-teardown.js',
  testEnvironment: './playwright/custom-environment.js',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
