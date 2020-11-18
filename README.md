# Deema

> "Deema" stands for ["deus-ex-machina"](https://en.wikipedia.org/wiki/Deus_ex_machina) since it can resolve **anything**.

A utility to resolve most non-vanilla JS import paths

## Usage

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  }
}
```

```ts
import { generateResolver } from "deema";

const resolve = generateResolver("/my/root/path");

resolve("src/component/main.ts", "@/shared/sum"); // "../shared/sum"
```

## [Work in progress](https://github.com/benawad/destiny/issues/123)

This repo is more of an experiment for now. We'll see if its concept become viable.
