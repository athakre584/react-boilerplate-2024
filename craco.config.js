module.exports = {
  eslint: {
    enable: false, // Disable ESLint errors in the build process
  },
  jest: {
    configure: {
      roots: ["<rootDir>/src"], // Look for test files inside the `src` directory
      testMatch: [
        "<rootDir>/src/**/*.test.js", // Customize as per your test structure
      ],
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      // other rules
    ],
  },
  plugins: [
    {
      options: {
        baseUrl: "./src",
        jsConfigPath: "./jsconfig.json",
        source: "jsconfig",
      },
      plugin: require("craco-alias"),
    },
  ],
};
