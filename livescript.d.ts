export type CompileOptions = {
  bare: boolean;
  header: string | boolean;
  const: boolean;
  json: boolean;
  run: boolean;
  print: boolean;
  map: "none" | "embeded" | "linked" | "debug";
  filename: string;
  outputFilename: string;
};

export interface LiveScript {
  VERSION: string;
  compile(code: string, options?: Partial<CompileOptions>): string;
  ast(code: string): object;
  tokens(code: string): Array<[string, string, number, number]>;
  lex(code: string): Array<[string, string, number, number]>;
  run(code: string, options?: Partial<CompileOptions>): any;
}

declare const exported: LiveScript;

export default exported;
