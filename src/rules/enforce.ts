import { TSESLint, TSESTree } from "@typescript-eslint/utils";

import { createRule } from "../utils/createRule";

type MessageIds = "default-parameter";
type Options = unknown;

export type RuleContext = Readonly<TSESLint.RuleContext<MessageIds, Options[]>>;

const rule = createRule<Options[], MessageIds>({
	name: "enforce",
	meta: {
		docs: {
			description: "Forbids the use of default parameters in functions, methods and constructors",
			recommended: "strict",
			requiresTypeChecking: false,
		},
		messages: {
			"default-parameter": "Default parameter are forbidden",
		},
		type: "problem",
		schema: [],
	},
	defaultOptions: [],
	create(context: RuleContext) {
		return {
			":function > AssignmentPattern"(node: TSESTree.Node) {
				context.report({ node, messageId: "default-parameter" });
			},
			"MethodDefinition[kind='constructor'] > FunctionExpression > TSParameterProperty[parameter.type='AssignmentPattern']"(
				node: TSESTree.Node,
			) {
				context.report({ node, messageId: "default-parameter" });
			},
		};
	},
});

export default rule;
