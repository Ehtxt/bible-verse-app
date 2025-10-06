import { useState } from "react"

export default function RandomVerse(){
  const [verse, setVerse] = useState(null)
  const [loading, setLoading] = useState(false)

  async function getRandom(){
    setLoading(true)
    setVerse(null)
    const r = await fetch("https://labs.bible.org/api/?passage=random&type=json")
    const data = await r.json()
    setVerse(Array.isArray(data) ? data[0] : null)
    setLoading(false)
  }

  return (
    <div className="card">
      <h2>Random Verse</h2>
      <button onClick={getRandom}>Get Vrese</button>
      {loading && <p>loading..</p>}
      {verse && (
        <p className="verse">
          {verse.text}
          <span className="ref">— {verse.bookname} {verse.chapter}:{verse.verse}</span>
        </p>
      )}
    </div>
  )
}
