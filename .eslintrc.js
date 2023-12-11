module.exports = {
	extends: [
		"eslint-config-codely/typescript",
	],
	parserOptions: {
		project: ["./tsconfig.json"],
	},
	"settings": {
		"import/resolver": {
			"typescript": {}
		},
	},
};
