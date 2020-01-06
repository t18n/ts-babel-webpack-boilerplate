module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  automock: false,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    }
  },
  moduleNameMapper: {
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  }
};
