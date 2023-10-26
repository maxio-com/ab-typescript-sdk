module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ["dist"],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.base.json',
    },
  },
};
