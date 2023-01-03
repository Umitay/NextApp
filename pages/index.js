import 'bootstrap/dist/css/bootstrap.css'

import { Layout } from '../components/Layout'
import { TenseCard } from '../components/Tense/TenseCard'
export default function Index({ tenses }) {
  return (
    <Layout>
      <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
        {tenses &&
          tenses.map((tense, index) => (
            <div className="d-flex col">
              <TenseCard tense={tense} key={index} />
            </div>
          ))}
      </div>
    </Layout>
  )
}
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:1234/tenses')
  const tenses = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      tenses,
    },
  }
}
