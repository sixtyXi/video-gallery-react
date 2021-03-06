module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>setupTests.js'],
  moduleNameMapper: {
    '\\.(sa|sc|c)ss$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['**/src/**/*.{js,jsx}'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/']
};
