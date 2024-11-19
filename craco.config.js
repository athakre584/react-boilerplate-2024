module.exports = {
  eslint: {
    enable: false, // Disable ESLint errors in the build process
  },
  jest: {
    configure: (jestConfig) => {
      jestConfig.testMatch = [
        "**/__tests__/**/*.{js,jsx,ts,tsx}",
        "**/?(*.)+(spec|test).{js,jsx,ts,tsx}",
      ];
      return jestConfig;
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
