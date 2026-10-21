import { Link } from 'react-router-dom'
import { profile, projects, experience } from '../content.js'
import Typing from '../components/Typing.jsx'
import Tags from '../components/Tags.jsx'
import { Stats } from './Experience.jsx'

export default function Home() {
  const { github, linkedin, email } = profile.links
  return (
    <>
      <section className="hero">
        <p className="eyebrow">$ whoami</p>
        <h1>
          <Typing text={profile.name} />
        </h1>
        <h2 className="role">{profile.title} <span className="prompt">·</span> Glasgow-based</h2>
        <p className="lead">{profile.tagline}</p>
        <div className="actions">
          <Link to="/experience" className="btn btn-primary">view experience</Link>
          <Link to="/projects" className="btn">view projects</Link>
          {profile.cvUrl && (
            <a href={profile.cvUrl} className="btn" download>download cv</a>
          )}
          {github && <a href={github} className="btn" target="_blank" rel="noreferrer">github</a>}
          <a href={linkedin} className="btn" target="_blank" rel="noreferrer">linkedin</a>
          <a href={`mailto:${email}`} className="btn">email</a>
        </div>
      </section>

      <section>
        <h2 className="section-title"><span className="prompt">#</span> professional experience</h2>
        <article className="card card-featured">
          <p className="muted">{experience[0].period} · {experience[0].location}</p>
          <h3>{experience[0].role}</h3>
          <p className="company">{experience[0].company}</p>
          <p className="summary">{experience[0].summary}</p>
          <Stats items={experience[0].stats} />
          <Tags items={experience[0].tags} />
          <p className="card-links"><Link to="/experience">full experience →</Link></p>
        </article>
      </section>

      <section>
        <h2 className="section-title"><span className="prompt">#</span> featured projects</h2>
        <div className="grid">
          {projects.slice(0, 2).map((p) => (
            <article className="card" key={p.name}>
              <h3>{p.name}</h3>
              <p className="muted">{p.period}</p>
              <p>{p.description}</p>
              <Tags items={p.tags} />
            </article>
          ))}
        </div>
        <p><Link to="/projects" className="more">all projects →</Link></p>
      </section>
    </>
  )
}
