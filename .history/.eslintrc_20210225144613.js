module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-implicit-dependencies": [true, ["src"]],
    "no-submodule-imports": [true, "src"],
  },
};
