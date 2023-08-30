import { assert, describe, it } from "./deps.ts";
import * as mod from "@mod";

describe(`mod.ts`, () => {
  it(`should export correct objects and types`, () => {
    assert(mod.SkeletonPlugin);
    assert(mod.SkeletonPluginWithZodOptions);
    assert(mod.SkeletonPluginWithHandler);
    assert(mod.SkeletonPluginWithComponent);
    assert(mod.SkeletonPluginWithMiddleware);
  });
});
