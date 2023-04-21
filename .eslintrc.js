module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/consistent-type-exports": ["error", "interface"],
        "no-ununused-vars": "error",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "error",
  },
};
