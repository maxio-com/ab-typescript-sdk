module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.base.json',
    },
  },
  globalTeardown: "./src/utils/testTeardown.ts",
  testTimeout: 30000
};
