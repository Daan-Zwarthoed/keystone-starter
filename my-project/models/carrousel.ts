import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { image } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export const Carrousel: Lists.Carrousel = list({
  fields: {
    text: document({
      formatting: true,
      dividers: true,
      links: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
      ],
    }),
    image: image(),
  },
  ui: {
    listView: {
      initialColumns: ["text", "image"],
    },
  },
});
