// setupFilesAfterEnv: ['<rootDir>/jest.setup.js']

// module.exports = {
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["./setupTests.js"],
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//   moduleNameMapper: {
//     "\\.(css|scss)$": "identity-obj-proxy",
//   },
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
//   },
//   testMatch: ["<rootDir>/src/__tests__/**/*.test.(js|jsx|ts|tsx)"],
//   testPathIgnorePatterns: ["/node_modules/", "/public/"],
// };

const nextJest = require("next/jest");
const createJestConfig = nextJest({
  //Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});
//Add any custom config  to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    //Handle module aliases (this will be automatically configured for you soon)
    "^@/components(.*)$": "<rootDir>/components$1",
    // "^@/app(.*)$": "<rootDir>/app$1",
    "^@/app(.*)$": "<rootDir>/app$1",
  },
  testEnvironment: "jest-environment-jsdom",
};
//createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
