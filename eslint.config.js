export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
		"extends":["standard", "prettier"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
    },
  },
];
