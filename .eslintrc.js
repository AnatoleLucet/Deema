const defaultSettings = {
  env: { es6: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: "./tsconfig.json",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  extends: [
    "standard",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unused-vars": ["error"],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi", requireLast: true },
        singleline: { delimiter: "semi", requireLast: false },
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
  },
};

module.exports = defaultSettings;
