// https://jestjs.io/docs/en/configuration.html
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');
module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  setupFilesAfterEnv: ['<rootDir>/src/tests/utils/setupFilesAfterEnv.ts'],
};
