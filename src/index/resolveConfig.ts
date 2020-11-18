import { dirname, resolve as resolvePath } from "path";
import { readFileSync } from "fs";
import findUp from "find-up";
import { Config } from "./config";

function resolveTsconfig(cwd: string): Config["tsconfig"] | undefined {
  const tsconfigFile = findUp.sync(["tsconfig.json", "jsconfig.json"], { cwd });
  if (!tsconfigFile) {
    return undefined;
  }
  const tsconfig = JSON.parse(readFileSync(tsconfigFile).toString())
    .compilerOptions as any;
  const { rootDir = "." } = tsconfig;
  const root = dirname(tsconfigFile);
  return { tsconfig, root };
}

export function resolveConfig(cwd: string): Partial<Config> {
  return resolveTsconfig(cwd) ?? { root: cwd };
}
