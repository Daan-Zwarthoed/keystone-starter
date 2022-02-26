import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { image, text } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export const ContactForm: Lists.ContactForm = list({
  fields: {
    name: text(),
    email: text(),
    message: text(),
  },
  ui: {
    listView: {
      initialColumns: ["name", "email", "message"],
    },
    itemView: {
      defaultFieldMode: "read",
    },
  },
});
