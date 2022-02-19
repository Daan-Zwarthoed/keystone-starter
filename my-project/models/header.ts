import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { image } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

type PrismaContext = {
  context: {
    prisma: {
      header: {
        count: Function;
      };
    };
  };
  session: Object;
};

export const Header: Lists.Header = list({
  fields: {
    text: document({
      formatting: true,
    }),
    logo: image(),
  },
  ui: {
    hideCreate: async ({ session, context }: PrismaContext | any) =>
      (await context.prisma.header.count()) === 0 ? false : true,
    hideDelete: true,
    listView: {
      initialColumns: ["text", "logo"],
    },
  },
});
