import * as assert from "assert";
import { buildRef } from "../extension";

describe("buildRef", () => {
  it("should format single line reference", () => {
    assert.strictEqual(buildRef("app.ts", 10, 10), "@app.ts#10");
  });

  it("should format multi-line reference", () => {
    assert.strictEqual(buildRef("app.ts", 5, 15), "@app.ts#5-15");
  });

  it("should handle line 1", () => {
    assert.strictEqual(buildRef("index.js", 1, 1), "@index.js#1");
  });

  it("should handle files with multiple dots", () => {
    assert.strictEqual(buildRef("component.test.tsx", 3, 8), "@component.test.tsx#3-8");
  });

  it("should handle consecutive lines", () => {
    assert.strictEqual(buildRef("main.py", 7, 8), "@main.py#7-8");
  });
});
