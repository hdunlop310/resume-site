import { experience, earlyExperience } from '../content.js'
import Tags from '../components/Tags.jsx'

function Highlights({ items }) {
  return (
    <ul className="tiles">
      {items.map((h, i) => (
        <li className="tile" key={h.title}>
          <span className="tile-num">{String(i + 1).padStart(2, '0')}</span>
          <h3>{h.title}</h3>
          <p>{h.text}</p>
        </li>
      ))}
    </ul>
  )
}

export function Stats({ items }) {
  return (
    <ul className="stats">
      {items.map((s) => (
        <li key={s.label}>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <section>
      <h1 className="page-title"><span className="prompt">#</span> experience</h1>
      <ol className="timeline">
        {experience.map((e) => (
          <li className="timeline-item" key={e.role + e.period}>
            <p className="muted">{e.period} · {e.location}</p>
            <h2>{e.role}</h2>
            <p className="company">{e.company}</p>
            {e.summary && <p className="summary">{e.summary}</p>}
            {e.stats && <Stats items={e.stats} />}
            {e.highlights && <Highlights items={e.highlights} />}
            {e.points && (
              <ul className="bullets">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            <Tags items={e.tags} />
          </li>
        ))}
      </ol>

      <h2 className="section-title"><span className="prompt">#</span> early experience</h2>
      <ul className="bullets">
        {earlyExperience.map((e) => (
          <li key={e.company}>
            <strong>{e.company}</strong> <span className="muted">({e.period})</span>: {e.note}
          </li>
        ))}
      </ul>
    </section>
  )
}
