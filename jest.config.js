module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/__tests__/setupTests.js", "<rootDir>/__tests__/__mocks__/"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__tests__/__mocks__/styleMock.js",
  },
};
