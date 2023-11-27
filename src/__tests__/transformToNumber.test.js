import { it, expect } from "vitest";
import { transformToNumber } from "../utils/transformToNumber";

it("should return a number if a numeric string is provided", () => {
	const stringNumber = "5";
	const result = transformToNumber(stringNumber);

	expect(result).toBeTypeOf("number");
	expect(result).not.toBeTypeOf("string");
	expect(isNaN(result)).not.toBe(true);
});
