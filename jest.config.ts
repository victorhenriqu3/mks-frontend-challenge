import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(<rootDir>/src/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
