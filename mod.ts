// @deno-types="./livescript.d.ts"
import LiveScript from "./livescript.js";

export const VERSION = LiveScript.VERSION;

export type CompileOptions = {
  bare: boolean;
  header: string | boolean;
  const: boolean;
  filename: string;
};

export function compile(
  code: string,
  options: Partial<CompileOptions> = {},
): string {
  return LiveScript.compile(code, { bare: true, ...options });
}

export default LiveScript;