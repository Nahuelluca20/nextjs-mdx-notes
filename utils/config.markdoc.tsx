import {Config} from "@markdoc/markdoc";

import {Fence} from "@/components/markdoc/fence";
import {Callout} from "@/components/markdoc/callout";
import Heading from "@/components/markdoc/heading";

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
    fence: {
      render: "Fence",
      attributes: {
        language: {
          type: String,
          default: "javascript",
        },
      },
    },
  },
  tags: {
    fence: {
      render: "Fence",
      attributes: {
        language: {
          type: String,
          default: "javascript",
        },
      },
    },
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
  Callout: Callout,
  Heading: Heading,
  Fence: Fence,
};

export {config, components};
