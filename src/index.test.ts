import { expect, test } from "vitest";
import { slugify } from "./index.js";

test("turns words into a slug", () => {
  expect(slugify("Hello Crew")).toBe("hello-crew");
});

test("trims input and replaces punctuation", () => {
  expect(slugify("  AI Dev Crew!  ")).toBe("ai-dev-crew");
});
