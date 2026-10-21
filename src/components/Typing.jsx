import { useEffect, useState } from 'react'

export default function Typing({ text, speed = 45 }) {
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [n, setN] = useState(reduced ? text.length : 0)

  useEffect(() => {
    if (n >= text.length) return
    const id = setTimeout(() => setN(n + 1), speed)
    return () => clearTimeout(id)
  }, [n, text, speed])

  return (
    <span aria-label={text}>
      <span aria-hidden="true">{text.slice(0, n)}</span>
      <span className="cursor" aria-hidden="true">_</span>
    </span>
  )
}
