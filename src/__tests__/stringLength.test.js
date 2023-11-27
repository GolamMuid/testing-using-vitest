import { it, expect } from "vitest";
import { stringLength } from "../utils/stringLength";

//? Test for non-empty string

it("should return the correct length of a non empty string", () => {
	expect(stringLength("hello")).toBe(5);
	expect(stringLength("world")).toBe(5);
	expect(stringLength("Hello world")).toBe(11);
});

//? Test for empty string

it("should return 0 for an empty string", () => {
	expect(stringLength("")).toBe(0);
});

//? Test for not string

it("should throw an error for not string type", () => {
	expect(() => stringLength(undefined)).toThrow();
	expect(() => stringLength(null)).toThrow();
	expect(stringLength(123)).toBeUndefined();
});
