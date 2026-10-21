import { NavLink } from 'react-router-dom'
import { profile } from '../content.js'

const links = [
  { to: '/', label: 'home' },
  { to: '/experience', label: 'experience' },
  { to: '/education', label: 'education' },
  { to: '/projects', label: 'projects' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="brand">
          <span className="prompt">&gt;</span> {profile.name.toLowerCase().replace(/\s+/g, '_')}
        </NavLink>
        <nav aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
