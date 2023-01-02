import 'bootstrap/dist/css/bootstrap.css'

import { Layout } from '../components/Layout'
import { Tense } from '../components/Tense'
export default function Index({ tenses }) {
  return (
    <Layout>
      <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
        {tenses &&
          tenses.map((tense) => (
            <div className="d-flex col">
              <Tense title={tense.title} />
            </div>
          ))}
      </div>
    </Layout>
  )
}
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //const res = await fetch('localhost:3000/tenses')
  const tenses = [{ title: 'past' }, { title: 'past2' }, { title: 'past3' }] //await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      tenses,
    },
  }
}
