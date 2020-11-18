import { resolve } from "./index/resolve";
import { resolveConfig } from "./index/resolveConfig";

export function generateResolver(basePath: string = ".") {
  const config = resolveConfig(basePath);
  return (filePath: string, importPath: string) =>
    resolve(filePath, importPath, config);
}

export { generateResolver as deema };
