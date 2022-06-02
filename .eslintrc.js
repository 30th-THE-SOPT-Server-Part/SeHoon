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
		createDefaultProgram: true,
		project: './tsconfig.json',
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'import/prefer-default-export': 'off',
		'import/extensions': ['off'],
		'import/no-extraneous-dependencies': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'typescript-eslint/no-shadow': 'off',
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
	},
	env: {
		jest: true,
	},
};
