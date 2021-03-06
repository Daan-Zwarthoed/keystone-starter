import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { image } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

type PrismaContext = {
  context: {
    prisma: {
      landing: {
        count: Function;
      };
    };
  };
  session: Object;
};

export const Landing: Lists.Landing = list({
  fields: {
    text: document({
      formatting: true,
    }),
    background: image(),
  },
  ui: {
    hideCreate: async ({ session, context }: PrismaContext | any) =>
      (await context.prisma.landing.count()) === 0 ? false : true,
    hideDelete: true,
    listView: {
      initialColumns: ["text", "background"],
    },
  },
});
