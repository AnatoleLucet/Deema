import { Config } from "./config";
import { resolveTypescript } from "./resolve/resolveTypescript";

export function resolve(
  filePath: string,
  importPath: string,
  config?: Partial<Config>
): string {
  if (!config) {
    // perhaps fetch config from filePath
    return importPath;
  }
  if (config.tsconfig) {
    return resolveTypescript(filePath, importPath, config as any);
  }
  // rest of the configurations would go here
  return importPath;
}
