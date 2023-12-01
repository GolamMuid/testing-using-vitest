import { expect, it } from "vitest";
import { User } from "../utils/hooks";

it("should have an email property", () => {
  const testEmail = "test@gmail.com";

  const user = new User(testEmail);

  expect(user).toHaveProperty("email");
});

//? Concurrent test

it.concurrent("should update email the email", () => {
  const testEmail = "test@gmail.com";
  const newTestEmail = "newtest@gmail.com";

  const user = new User(testEmail);
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it("should store the provided email value", () => {
  const testEmail = "test@gmail.com";

  const user = new User(testEmail);

  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  const testEmail = "test@gmail.com";

  const user = new User(testEmail);
  user.clearEmail();

  expect(user.email).toBe("");
});

it("should still have an email property after clearing", () => {
  const testEmail = "test@gmail.com";

  const user = new User(testEmail);
  user.clearEmail();

  expect(user).toHaveProperty("email");
});
