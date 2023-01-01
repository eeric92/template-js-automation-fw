module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		es6: true
	},
	extends: ["eslint:recommended", "prettier"],
	overrides: [],
	parserOptions: {
		ecmaVersion: 12
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"]
	}
};
