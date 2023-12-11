import { ESLintUtils } from "@typescript-eslint/utils";

export const createRule = ESLintUtils.RuleCreator(
	() => "https://github.com/CodelyTV/eslint-plugin-no-default-parameters/blob/main/README.md",
);
