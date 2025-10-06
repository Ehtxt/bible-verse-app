import { useState } from "react"

export default function SpecificVerse(){
  const [ref, setRef] = useState("John 3:16")
  const [verse, setVerse] = useState(null)
  const [busy, setBusy] = useState(false)

  async function getVerse(){
    setBusy(true)
    setVerse(null)
    const url = "https://labs.bible.org/api/?passage=" + encodeURIComponent(ref) + "&type=json"
    const r = await fetch(url)
    const data = await r.json()
    setVerse(Array.isArray(data) ? data[0] : null)
    setBusy(false)
  }

  return (
    <div className="card">
      <h2>Find a Verse</h2>
      <div className="row">
        <input value={ref} onChange={(e)=>setRef(e.target.value)} placeholder="Ex: John 3:16" />
        <button onClick={getVerse}>Fetch</button>
      </div>
      {busy && <p>loading...</p>}
      {verse && (
        <p className="verse">
          {verse.text}
          <span className="ref">— {verse.bookname} {verse.chapter}:{verse.verse}</span>
        </p>
      )}
    </div>
  )
}
