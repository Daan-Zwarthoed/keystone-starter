import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { image, text, password } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export const User: Lists.User = list({
  fields: {
    name: text({ isIndexed: "unique" }),
    email: text({ isIndexed: "unique" }),
    password: password(),
  },
});
