module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'import/prefer-default-export': 'off',
		'import/extensions': ['off'],
		'import/no-extraneous-dependencies': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
	},
};
