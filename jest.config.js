module.exports = {
  verbose: true,
  setupFilesAfterEnv: [ '<rootDir>setupTests.js' ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },
  snapshotSerializers: [ 'enzyme-to-json/serializer' ]
};
