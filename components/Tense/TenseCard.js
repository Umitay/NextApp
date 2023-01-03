import Link from 'next/link'
import Image from 'next/image'
export function TenseCard({ tense }) {
  return (
    <div className="card">
      <Image src="{tense.image}" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{tense.title}</h5>
        <p className="card-text">{tense.summary}</p>
        <Link
          href={'/tense/[sug]'}
          as={'/tense/${tense.sug}'}
          className="btn btn-primary"
        >
          Start..
        </Link>
      </div>
    </div>
  )
}
