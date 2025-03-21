
// jest.config.ts

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
      "^.+\\.tsx?$": [ "ts-jest", {tsconfig: './tsconfig.app.json'},],
  },
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
      '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['./jest.setup.js'],

}