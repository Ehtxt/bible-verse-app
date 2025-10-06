import "./App.css"
import RandomVerse from "./components/RandomVerse.jsx"
import SpecificVerse from "./components/SpecificVerse.jsx"

export default function App(){
  const title = "Bibel Verses"
  return (
    <div className="page">
      <main>
        <RandomVerse />
        <SpecificVerse />
      </main>
      <footer>
        <small>Project : The Frontend</small>
      </footer>
    </div>
  )
}
