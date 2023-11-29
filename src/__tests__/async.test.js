import { it, expect, beforeAll, afterAll, beforeEach, afterEach } from "vitest";
import { encryptedMessage, encryptedMessagePromise } from "../utils/async";
import CryptoJS from "crypto-js";

beforeAll(() => {
	console.log("Before All");
});

afterAll(() => {
	console.log("After All");
});
beforeEach(() => {
	console.log("Before Each");
});
afterEach(() => {
	console.log("After Each");
});

it("should encrypt a message", async () => {
	const message = "Tonmoy";
	const secretKey = "4568791213";

	const encryptedData = await new Promise((resolve, reject) => {
		encryptedMessage(message, secretKey, (message) => {
			resolve(message);
		});
	});
	expect(encryptedData).toBeDefined();
});

it("should also just pass", async () => {
	const message = "Tonmoy";
	const secretKey = "4568791213";

	const encryptedData = await encryptedMessagePromise(message, secretKey);

	expect(encryptedData).toBeDefined();
});

it("should return the decrypted message", async () => {
	const message = "Tonmoy";
	const secretKey = "4568791213";

	const encryptedData = await encryptedMessagePromise(message, secretKey);

	const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);

	const originalText = bytes.toString(CryptoJS.enc.Utf8);

	expect(originalText).toBe(message);
});
