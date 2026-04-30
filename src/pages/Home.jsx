import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMonsters } from '../services/api'

function Home() {
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMonsters() {
      try {
        const data = await getMonsters()
        setMonsters(data)
        setFilteredMonsters(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadMonsters()
  }, [])

  function handleSearch(value) {
    setSearch(value)

    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredMonsters(filtered)
  }

  if (loading) {
    return <main className="loading">Carregando monstros...</main>
  }

  return (
    <main className="container">
      <section className="hero">
        <h1>Bestiário Dungeons & Dragons</h1>
        <p>
          Consulte criaturas, atributos e informações de monstros da API oficial
          D&D 5e.
        </p>
      </section>

      <input
        className="search"
        type="text"
        placeholder="Buscar monstro..."
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />

      <section className="grid">
        {filteredMonsters.map((monster) => (
          <Link
            key={monster.index}
            to={`/monster/${monster.index}`}
            className="card"
          >
            <h2>{monster.name}</h2>
            <span>{monster.index}</span>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home