module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaVersion: "latest",
    emitDecoratorMetadata: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "node"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended-module",
    "plugin:prettier/recommended",
    "prettier",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  // TODO: Add data standards and off-chain directories
  ignorePatterns: [
    ".eslintrc.cjs",
    "test/setup.jest.cjs",
    "types/google",
    "src/data-standards/",
  ],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    // https://github.com/typescript-eslint/typescript-eslint/issues/2484#issuecomment-687257773
    "no-shadow": "off",
    "no-use-before-define": "error",
    "no-nested-ternary": "off",
    "no-warning-comments": "warn",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/naming-convention": "warn",
    // it doesn't understand top-level await
    "node/no-unsupported-features/es-syntax": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "node/no-unpublished-import": "warn",
    "node/no-extraneous-import": "warn",
    "max-classes-per-file": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-misused-promises": ["error"],
    "node/no-missing-import": "off",
    "import/no-cycle": "warn",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": ["error"],
    "no-console": "error",
    "no-invalid-this": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-loop-func": "warn",
    "import/prefer-default-export": "off",
    // needed for TS and importing CJS modules
    "import/extensions": [
      "error",
      "always",
      {
        ignorePackages: false,
        pattern: {
          "": "always",
          ts: "never",
          js: "never",
        },
      },
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    "no-empty-function": "off",
    "import/no-extraneous-dependencies": "off",
    "no-restricted-syntax": ["error", "WithStatement"],
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-await-in-loop": "off",
    "no-continue": "off",
    "no-plusplus": "off",
  },
  overrides: [
    {
      files: ["**/*.spec.ts"],
      rules: {
        "node/no-unpublished-import": "off",
      },
    },
  ],
};
