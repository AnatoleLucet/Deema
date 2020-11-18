import { resolve } from "path";
import { resolveConfig } from "./resolveConfig";

it("should find tsconfig.json", () => {
  expect(
    resolveConfig(resolve(__dirname, "__fixtures/page/main.ts"))
  ).toMatchObject({
    tsconfig: {
      baseUrl: ".",
      paths: { "@/*": ["./*"] },
    },
  });
});
