import { profile } from '../content.js'

export default function Footer() {
  const { github, linkedin, email } = profile.links
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer-links">
          {github && <a href={github} target="_blank" rel="noreferrer">github</a>}
          <a href={linkedin} target="_blank" rel="noreferrer">linkedin</a>
          <a href={`mailto:${email}`}>email</a>
        </span>
      </div>
    </footer>
  )
}
