import Markdoc from "@markdoc/markdoc";

import {config} from "./config.markdoc";

export function parseMdx(input: string) {
  const ast = Markdoc.parse(input);
  const content = Markdoc.transform(ast, config);

  return content;
}
