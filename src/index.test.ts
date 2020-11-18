import { resolve as resolvePath } from "path";
import { generateResolver } from "./index";

describe("generateResolver", () => {
  const resolve = generateResolver(
    resolvePath(__dirname, "index/__fixtures/page")
  );
  it("should not resolve relative path", () => {
    expect(resolve("./page/main.ts", "./page2")).toBe("./page2");
  });
  it("should resolved based on tsconfig", () => {
    expect(resolve("./page/main.ts", "@/helpers/sum")).toBe("../helpers/sum");
  });
});
