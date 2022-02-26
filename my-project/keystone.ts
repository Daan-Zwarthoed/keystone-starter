import { config, list } from "@keystone-6/core";
import { Header } from "./models/header";
import { Collage } from "./models/collage";
import { Landing } from "./models/landing";
import { AboutMe } from "./models/aboutMe";
import { Carrousel } from "./models/carrousel";
import { Contact } from "./models/contact";
import { ContactForm } from "./models/contactForm";

const lists = {
  Header,
  Collage,
  Landing,
  AboutMe,
  Carrousel,
  Contact,
  ContactForm,
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
      storagePath: "public/images/database",
      baseUrl: "/images/database",
    },
  },
});
