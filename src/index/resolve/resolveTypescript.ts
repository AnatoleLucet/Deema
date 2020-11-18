import { dirname, relative, resolve as resolvePath, extname } from "path";
import { existsSync } from "fs";
import { parse } from "url";
import { Config } from "../config";

function normalizePath(p: string) {
  // Is extended length or has non-ascii chars (respectively)
  if (/^\\\\\?\\/.test(p) || /[^\u0000-\u0080]+/.test(p)) {
    return p;
  }
  // Normalize to forward slash and remove repeating slashes
  return p.replace(/[\\\/]+/g, "/");
}

function isRelative(s: string) {
  return s[0] === ".";
}

function isUrl(s: string) {
  return parse(s).protocol !== null;
}

export function resolveTypescript(
  filePath: string,
  importPath: string,
  config: Pick<Config, "tsconfig" | "root">
) {
  if (isRelative(importPath)) {
    // if it's relative path do not transform
    return importPath;
  }

  const { tsconfig, root } = config;
  const { paths = {}, rootDir } = tsconfig;

  const sourceDir = dirname(filePath);

  const binds = Object.entries(paths)
    .filter(([_, paths]) => (paths as any).length)
    .map(([key, paths]) => ({
      regexp: new RegExp("^" + key.replace("*", "(.*)") + "$"),
      paths: paths as any,
    }));

  for (const { regexp, paths } of binds) {
    const match = regexp.exec(importPath);
    if (match) {
      for (const p of paths) {
        const out = p.replace(/\*/g, match[1]);

        if (isUrl(out)) return out;

        const filepath = resolvePath(root, out);

        const resolved = normalizePath(relative(sourceDir, filepath));

        return isRelative(resolved) ? resolved : `./${resolved}`;
      }
    }
  }

  return importPath;
}
