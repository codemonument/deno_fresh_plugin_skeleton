import { Plugin } from "./deps/fresh.ts";

type SkeletonOptions = {
  option1: boolean;
  option2: string;
  // ...
};

export function SkeletonPlugin(options: SkeletonOptions) {
  // ... validate your options
  // ... init your plugin

  console.log(`[01_skeleton_plugin] options: `, options);

  return {
    name: "openprops",
  } satisfies Plugin; // this `satisfies` ensures that your plugin object is correct without tricking the typescript compiler;
}
