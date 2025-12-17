import globals from "globals";

export default [
  {
    ignores: [
      "_site/**",
      "node_modules/**",
      "vendor/**",
      ".bundle/**",
      ".jekyll-cache/**",
      "reports/**",
      "_inbox/**",
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Practical “high-end” baseline without being noisy
      "no-var": "off",
      "no-undef": "error",
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "no-unreachable": "error",
      "no-constant-condition": ["error", { checkLoops: false }],
      "no-useless-catch": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "multi-line"],
      "no-eval": "error",
      "no-implied-eval": "error",
    },
  },
  {
    files: ["worker/**/*.js"],
    languageOptions: {
      globals: {
        GITHUB_PAT: "readonly",
      },
    },
  },
];
