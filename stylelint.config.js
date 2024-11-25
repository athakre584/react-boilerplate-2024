module.exports = {
    extends: ["stylelint-config-standard"],
    ignoreFiles: [
        "dist/**/*",
        "node_modules/**/*",
        "src/styles/ignore-this.css",
        "src/styles/**.scss",
        "build/**/*",
        "coverage/**/*"
    ],
    rules: {
      "declaration-empty-line-before": "never"
    },
  };