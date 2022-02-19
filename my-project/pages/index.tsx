// Import the generated Lists API and types from Keystone
import { query } from '.keystone/api';
import Header from '../components/header'
import Collage from '../components/collage'

type PropsType = {
  collage: any,
  nav: string[]
  header: any
}
// Home receives a `posts` prop from `getStaticProps` below
export default function Home({ collage, header, nav }: PropsType) {
  return (
    <main style={{ margin: '3rem' }}>
      <Header header={{
        id: header[0].id,
        logo: header[0].logo,
        text: header[0].text,
        nav: nav,
      }}></Header>
      <Collage collage={collage}></Collage>

    </main>
  );
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const collage = await query.Collage.findMany({ query: 'id text{document} image{url width height}' })
  const header = await query.Header.findMany({ query: 'id text{document} logo{url width height}' })
  const nav = ["collage"];
  return {
    props: {
      collage,
      header,
      nav
    }
  };
}