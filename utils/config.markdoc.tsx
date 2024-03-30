import {Config} from "@markdoc/markdoc";

import Heading from "@/components/markdoc/heading";
import {Fence} from "@/components/markdoc/fence";
import {Callout} from "@/components/markdoc/callout";

const config: Config = {
  nodes: {
    paragraph: {
      render: "Paragraph",
    },
    heading: {
      render: "Heading",
      attributes: {
        level: {type: String},
      },
    },
  },
  tags: {
    callout: {
      render: "Callout",
      attributes: {
        title: {
          type: String,
          default: "default title",
        },
      },
    },
  },
};

const components = {
  Paragraph: ({children}: any) => {
    return <p>{children}</p>;
  },
  Heading: Heading,
  Callout: Callout,
  Fence: Fence,
};

export {config, components};
