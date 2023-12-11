"use strict";

import { RuleTester } from "@typescript-eslint/rule-tester";

import rule from "../../src/rules/enforce";

const ruleTester = new RuleTester({
	parser: "@typescript-eslint/parser",
});

ruleTester.run("enforce", rule, {
	valid: [
		"function f(a, ...rest) {}",
		"const f = function(a, ...rest) {}",
		"const f = (a, ...rest) => {}",
		"({ method(a, ...rest) {} })",
		"class A { method(a, ...rest) {} }",
		"class A { constructor(a, ...rest) {} }",
		"(class { method(a, ...rest) {} })",
		"var a = 1",
		"var {a = 0} = obj",
		"var [a = 0] = ary",
		"({a = 0} = obj)",
		"([a = 0] = ary)",
		"function f({a = 0}) {}",
		"function f([a = 0]) {}",
	],
	invalid: [
		{
			code: "async function f(a = 0) {}",
			errors: [{ messageId: "default-parameter", data: {} }],
		},
		{
			code: "const f = async function(a = 0) {}",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "const f = async (a = 0) => {}",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "({ async method(a = 0) {} })",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "class A { async method(a = 0) {} }",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "class A { constructor(a = 0) {} }",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "class A { constructor(readonly a = 0) {} }",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "class A { constructor(public readonly a = 0) {} }",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "class A { constructor(readonly a = 0) {} }",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "(class { async method(a = 0) {} })",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "async function f({a} = 0) {}",
			errors: [{ messageId: "default-parameter" }],
		},
		{
			code: "async function f([a] = 0) {}",
			errors: [{ messageId: "default-parameter" }],
		},
	],
});
