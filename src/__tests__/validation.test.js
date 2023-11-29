import { it, expect, describe } from "vitest";
import { validateArrayNonEmpty, validateEmail } from "../utils/validation";

// * Email Validation

describe("validateEmail()", () => {
	//? test for valid email

	it("should validate a correct email address", () => {
		const email = "test@example.com";
		const resultFn = () => validateEmail(email);

		expect(resultFn).not.toThrow();
	});

	//? test for invalid email

	it("should throw an error if an invalid email address is provided", () => {
		const email = "test.com";
		const resultFn = () => validateEmail(email);

		expect(resultFn).toThrow();
	});

	//? test for empty string

	it("should throw an error if an empty string is provided", () => {
		const email = "";
		const resultFn = () => validateEmail(email);

		expect(resultFn).toThrow();
	});

	//? test for null value

	it("should throw an error if an empty string is provided", () => {
		expect(() => validateEmail(null)).toThrow("Invalid email address");
	});

	//? test for undefined value

	it("should throw an error if an empty string is provided", () => {
		expect(() => validateEmail(undefined)).toThrow("Invalid email address");
	});
});

// * Array Validation

describe("validateArray()", () => {
	//? test for a non empty array

	it("should validate a non-empty array", () => {
		const array = [2, 5];
		const resultFn = () => validateArrayNonEmpty(array);

		expect(resultFn).not.toThrow();
	});
});
