module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/Components/**/*.{js,jsx}',
    '!config/**/*.{js.jsx}',
    '!**/node_modules/**',
    '!**/**/index.js',
    '!build/**/**.test.jsx?',
    '!scripts/**/**.test.jsx?',
    '!public/**/**.test.jsx?',
    '!**/**/*_test.js'
  ],
  coverageDirectory: 'coverage/',
  coverageReporters: ['html', 'json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 80,
      functions: 85,
      lines: 91
    }
  },
  resolver: 'jest-pnp-resolver',
  setupFiles: ['react-app-polyfill/jsdom', './setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx}'
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node']
};
