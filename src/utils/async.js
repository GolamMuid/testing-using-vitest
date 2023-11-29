import CryptoJS from "crypto-js";

export function encryptedMessage(message, key, callback) {
	const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();

	callback(encryptedMessage);
}

export function encryptedMessagePromise(message, key) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
			if (encryptedMessage) {
				resolve(encryptedMessage);
			} else {
				reject(new Error("Failed to resolve encrypted message"));
			}
		}, 2000);
	});
}
