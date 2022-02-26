// Import the generated Lists API and types from Keystone
import { query } from '.keystone/api';
import type { KeystoneContext } from '@keystone-6/core/types';
import Header from './components/header'
import Landing from './components/landing'
import AboutMe from './components/aboutMe'
import Collage from './components/collage'
import Carrousel from './components/carrousel'
import Contact from './components/contact'
import { GetStaticPropsContext } from 'next';



type PropsType = {
  collage: any
  landing: any
  aboutMe: any
  nav: string[]
  header: any
  carrousel: any
  contact: any
}
// Home receives a `posts` prop from `getStaticProps` below
export default function Home({ header, nav, landing, aboutMe, collage, carrousel, contact }: PropsType) {
  return (
    <main>
      <Header header={{
        id: header[0].id,
        logo: header[0].logo,
        text: header[0].text,
        nav: nav,
      }}></Header>
      < Landing landing={landing[0]}></Landing>
      <AboutMe aboutMe={aboutMe[0]}></AboutMe>
      <Collage collage={collage}></Collage>
      <Carrousel carrousel={carrousel}></Carrousel>
      <Contact contact={contact[0]}></Contact>

    </main >
  );
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {


  const header = await query.Header.findMany({ query: 'id text{document} logo{url width height}' })
  const landing = await query.Landing.findMany({ query: 'id text{document} background{url width height}' })
  const aboutMe = await query.AboutMe.findMany({ query: 'id text{document} image{url width height}' })
  const collage = await query.Collage.findMany({ query: 'id text{document} image{url width height}' })
  const carrousel = await query.Carrousel.findMany({ query: 'id text{document} image{url width height}' })
  const contact = await query.Contact.findMany({ query: 'id text{document} logo{url width height} contactForm' })
  console.log('test');

  const nav = ["over-mij", "collage", "carrousel", "contact"];

  return {
    props: {
      header,
      landing,
      aboutMe,
      collage,
      carrousel,
      contact,
      nav
    }
  };
}