import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|js)?$': 'ts-jest',
  },
  rootDir: '.',
  testRegex: './__tests__/.*\\.(test|spec)?\\.(ts|js)$',
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['/node_modules/(?!svgo)'],
  roots: ['<rootDir>/__tests__', '<rootDir>/src'],
  coveragePathIgnorePatterns: ['<rootDir>/__tests__/'],
  coverageReporters: ['lcov', 'cobertura', 'html'],
  setupFilesAfterEnv: ['<rootDir>/jest.env.js'],
  testTimeout: 9000,
  testResultsProcessor: 'jest-sonar-reporter',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/src/',
  }),
};
