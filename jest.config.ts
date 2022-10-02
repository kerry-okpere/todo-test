import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', __dirname],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@styles/(.*)': '<rootDir>/src/styles/$1',
    '^@test-utils/(.*)': '<rootDir>/src/test-utils/$1',
  },
}

export default createJestConfig(customJestConfig)
