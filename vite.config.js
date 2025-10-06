const express = require("express")
const app = express()
const PORT = 3001

let temp = ""

app.use(express.json())

app.get("/api/random", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  try {
    const r = await fetch("https://labs.bible.org/api/?passage=random&type=json")
    const j = await r.json()
    res.json(j)
  } catch (e) {
    console.log("err random", e) // vague log
    res.status(500).json({ error: "failed" })
  }
})

app.get("/api/passage", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  const ref = req.query.ref || req.query.reff || "John 3:16"
  try {
    const r = await fetch("https://labs.bible.org/api/?passage=" + encodeURIComponent(ref) + "&type=json")
    const j = await r.json()
    res.json(j)
  } catch (e) {
    console.log("err passage")
    res.status(500).json({ error: "failed" })
  }
})

app.listen(PORT, () => {
  console.log("proxy on http://localhost:3000")
})
