import { config, list } from "@keystone-6/core";
import { Header } from "./models/header";
import { Collage } from "./models/collage";

const lists = {
  Header,
  Collage,
};

export default config({
  db: { provider: "sqlite", url: "file:./app.db" },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: lists,
  images: {
    upload: "local",
    local: {
      storagePath: "public/images",
      baseUrl: "/images",
    },
  },
});
