import { it, expect } from "vitest";
import { add } from "../utils/math";

// ? Test for array

it("should return the correct sum if an array of number is provided", () => {
	//Arrange
	const numbers = [1, 2, 3];
	const expectedResult = numbers.reduce((acc, cur) => acc + cur);

	//Actions
	const result = add(numbers);

	//Assertion
	expect(result).toBe(expectedResult);
});

// ? Test for invalid number

it("should return Nan if atlease one invalid number is provided", () => {
	//Arrange
	const numbers = [1, "invalid", 3];

	//Actions
	const result = add(numbers);

	//Assertion
	expect(result).toBeNaN();
});

// ? Test for string

it("should return the correct sum if an array of numeric string is provided", () => {
	//Arrange
	const numbers = ["1", "2", "3"];
	const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);

	//Actions
	const result = add(numbers);

	//Assertion
	expect(result).toBe(expectedResult);
});

// ? Test for invalid number

it("should throw an error the correct sum if an array of numeric string is provided", () => {
	//Arrange
	const numbers = ["1", "2", "3"];
	const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);

	//Actions
	const result = add(numbers);

	//Assertion
	expect(result).toBe(expectedResult);
});

// ? Test for no argument

it("should throw an error if no argument is passed", () => {
	const resultFn = () => {
		add();
	};

	expect(resultFn).toThrow();
});

// ? Test for multiple argument

it("should throw an error if multiple argument is provided", () => {
	const resultFn = () => {
		add(1, 2, 3);
	};

	expect(resultFn).toThrow(/is not iterable/i);
});
