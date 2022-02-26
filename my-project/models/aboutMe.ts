import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { image } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

type PrismaContext = {
  context: {
    prisma: {
      aboutMe: {
        count: Function;
      };
    };
  };
  session: Object;
};

export const AboutMe: Lists.AboutMe = list({
  fields: {
    text: document({
      formatting: true,
      dividers: true,
      links: true,
    }),
    image: image(),
  },
  ui: {
    hideCreate: async ({ session, context }: PrismaContext | any) =>
      (await context.prisma.aboutMe.count()) === 0 ? false : true,
    hideDelete: true,
    listView: {
      initialColumns: ["text", "image"],
    },
  },
});
