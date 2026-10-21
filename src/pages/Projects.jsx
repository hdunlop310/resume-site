import { projects } from '../content.js'
import Tags from '../components/Tags.jsx'

export default function Projects() {
  return (
    <section>
      <h1 className="page-title"><span className="prompt">#</span> projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.name}>
            <h2>{p.name}</h2>
            <p className="muted">{p.period}</p>
            <p>{p.description}</p>
            <Tags items={p.tags} />
            <p className="card-links">
              {p.url && <a href={p.url} target="_blank" rel="noreferrer">live →</a>}
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">code →</a>}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
