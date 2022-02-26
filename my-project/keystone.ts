import { config, list } from "@keystone-6/core";
import { createAuth } from "@keystone-6/auth";
import { User } from "./models/user";
import { Header } from "./models/header";
import { Collage } from "./models/collage";
import { Landing } from "./models/landing";
import { AboutMe } from "./models/aboutMe";
import { Carrousel } from "./models/carrousel";
import { Contact } from "./models/contact";
import { ContactForm } from "./models/contactForm";
import { statelessSessions } from "@keystone-6/core/session";

const lists = {
  User,
  Header,
  Collage,
  Landing,
  AboutMe,
  Carrousel,
  Contact,
  ContactForm,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
});

const session = statelessSessions({
  secret: "-- EXAMPLE COOKIE SECRET; CHANGE ME --",
});

export default withAuth({
  db: {
    provider: "sqlite",
    url: process.env.DATABASE_URL || "file:./app.db",
  },
  session,
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
