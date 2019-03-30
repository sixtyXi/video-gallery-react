module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>setupTests.js'],
  moduleNameMapper: {
    '\\.(sa|sc|c)ss$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};
