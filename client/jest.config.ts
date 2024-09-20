module.exports = {
  testEnvironment: "jsdom", // Simulates a browser-like environment for React components
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Transforms JavaScript, TypeScript, and JSX files using Babel
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust path aliases based on your project setup
  },
  setupFilesAfterEnv: [
    "<rootDir>/node_modules/@testing-library/jest-dom/dist/index.js",
  ], // Ensures the path is correct
};
