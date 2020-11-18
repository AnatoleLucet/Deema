import { resolveTypescript } from "./resolveTypescript";

describe("tsconfig", () => {
  const tsconfig = {
    baseUrl: ".",
    paths: { "@/*": ["./*"] },
  };

  it("should not resolve relative paths", () => {
    expect(
      resolveTypescript("./page/a.ts", "../b", { tsconfig, root: "." })
    ).toBe("../b");
  });

  it("should resolve from root", () => {
    expect(
      resolveTypescript("./page/a.ts", "@/shared/b", { tsconfig, root: "." })
    ).toBe("../shared/b");
  });
});
