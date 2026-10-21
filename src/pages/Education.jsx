import { education, qualifications } from '../content.js'

export default function Education() {
  return (
    <section>
      <h1 className="page-title"><span className="prompt">#</span> education</h1>
      <ol className="timeline">
        {education.map((e) => (
          <li className="timeline-item" key={e.school}>
            <p className="muted">{e.period}</p>
            <h2>{e.course}</h2>
            <p className="company">{e.school}</p>
            <p>{e.grade}</p>
            {e.points.length > 0 && (
              <ul className="bullets">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {e.modules.length > 0 && (
              <details>
                <summary>modules</summary>
                <ul className="bullets">
                  {e.modules.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </details>
            )}
          </li>
        ))}
      </ol>

      <h2 className="section-title"><span className="prompt">#</span> extra qualifications</h2>
      <div className="grid">
        {qualifications.map((q) => (
          <article className="card" key={q.name}>
            <h3>{q.name}</h3>
            <p className="company">{q.issuer}</p>
            <p className="muted">{q.period}</p>
            {q.url && (
              <a href={q.url} target="_blank" rel="noreferrer" className="more">show credential →</a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
