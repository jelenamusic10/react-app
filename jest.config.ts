module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
