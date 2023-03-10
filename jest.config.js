// This file is needed because it is used by vscode and other tools that
// call `jest` directly.  However, unless you are doing anything special
// do not edit this file
const path = require('path');
const standard = require('@grafana/toolkit/src/config/jest.plugin.config');

// This process will use the same config that `yarn test` is using
const config = standard.jestConfig();

// Some libraries, like jest-dom should be configured in setupFilesAfterEnv instead of setupFiles
config.setupFilesAfterEnv = ['./config/setupTests.ts'];

module.exports = {
  ...config,
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
      snapshotSerializers: ["enzyme-to-json/serializer"],
    },
  },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  ...{ runner: './jest-runner-serial.js' },
};
