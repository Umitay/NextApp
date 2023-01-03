import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout'
export default function Tense({ tense }) {
  return (
    <Layout>
      {tense && (
        <div>
          <h1>{tense.title}</h1>
          <p>{tense.summary}</p>
          <h2>Description of {tense.title}</h2>
          <p>{tense.description}</p>
          <div>
            <h3> We make the {tense.title} in the following way</h3>

            {tense.affirmativeForm}
            {tense.negativeForm}
            {tense.questionForm}
          </div>

          <h3>Time Expression of {tense.title}</h3>
          <p>{tense.timeExpressions}</p>
          <h2>Note</h2>
          <p>{tense.notes}</p>
        </div>
      )}
    </Layout>
  )
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:1234/tenses')
  const tenses = await res.json()

  const paths = tenses.map((tense) => {
    return { params: { sug: tense.sug } }
  })

  return {
    paths,
    fallback: false,
  }
}
// This function gets called at build time
export async function getStaticProps(ctx) {
  const sug = ctx.params.sug
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:1234/tenses/${sug}`)
  const tense = await res.json()
  console.log(tense)
  const response = await fetch(
    `http://localhost:1234/exercises/?tenseId=${tense._id}`
  )
  const exercises = await response.json()
  console.log(exercises)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      tense,
      exercises,
    },
  }
}
