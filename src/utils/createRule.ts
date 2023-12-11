import { ESLintUtils } from "@typescript-eslint/utils";

export const createRule = ESLintUtils.RuleCreator(
	() => "https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture/blob/main/README.md",
);
