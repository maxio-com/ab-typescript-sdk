module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.base.json',
    },
  },
  globalTeardown: "./e2e/utils/testTeardown.ts",
};
