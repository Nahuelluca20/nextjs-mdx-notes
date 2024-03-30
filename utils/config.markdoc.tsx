import {Config} from "@markdoc/markdoc";

import {Fence} from "@/components/markdoc/fence";
import {Callout} from "@/components/markdoc/callout";

const config: Config = {
  nodes: {
    paragraph: {
      render: "Paragraph",
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
  Fence: Fence,
};

export {config, components};
