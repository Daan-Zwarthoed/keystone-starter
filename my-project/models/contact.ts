import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { image, checkbox } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

type PrismaContext = {
  context: {
    prisma: {
      contact: {
        count: Function;
      };
    };
  };
  session: Object;
};

export const Contact: Lists.Contact = list({
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
    logo: image(),
    contactForm: checkbox({
      defaultValue: true,
      graphql: {
        read: {
          isNonNull: true,
        },
        create: {
          isNonNull: true,
        },
      },
    }),
  },
  ui: {
    hideCreate: async ({ session, context }: PrismaContext | any) =>
      (await context.prisma.contact.count()) === 0 ? false : true,
    hideDelete: true,
    listView: {
      initialColumns: ["text", "logo", "contactForm"],
    },
  },
});
