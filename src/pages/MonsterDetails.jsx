import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMonsterByIndex } from '../services/api'

function MonsterDetails() {
  const { index } = useParams()
  const [monster, setMonster] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMonster() {
      try {
        const data = await getMonsterByIndex(index)
        setMonster(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadMonster()
  }, [index])

  if (loading) {
    return <main className="loading">Carregando detalhes...</main>
  }

  if (!monster) {
    return (
      <main className="container">
        <h1>Monstro não encontrado</h1>
        <Link to="/">Voltar</Link>
      </main>
    )
  }

  const imageUrl = monster.image
    ? `https://www.dnd5eapi.co${monster.image}`
    : null

  const armorClass = Array.isArray(monster.armor_class)
    ? monster.armor_class[0]?.value
    : 'Não informado'

  return (
    <main className="container">
      <Link to="/" className="back">← Voltar para monstros</Link>

      <section className="details">
        {imageUrl && <img src={imageUrl} alt={monster.name} />}

        <div>
          <h1>{monster.name}</h1>
          <p><strong>Tipo:</strong> {monster.type}</p>
          <p><strong>Tamanho:</strong> {monster.size}</p>
          <p><strong>Alinhamento:</strong> {monster.alignment}</p>
          <p><strong>Classe de Armadura:</strong> {armorClass}</p>
          <p><strong>Pontos de Vida:</strong> {monster.hit_points}</p>
          <p><strong>XP:</strong> {monster.xp}</p>
        </div>
      </section>

      <section className="stats">
        <div><strong>FOR</strong><span>{monster.strength}</span></div>
        <div><strong>DES</strong><span>{monster.dexterity}</span></div>
        <div><strong>CON</strong><span>{monster.constitution}</span></div>
        <div><strong>INT</strong><span>{monster.intelligence}</span></div>
        <div><strong>SAB</strong><span>{monster.wisdom}</span></div>
        <div><strong>CAR</strong><span>{monster.charisma}</span></div>
      </section>

      {monster.actions?.length > 0 && (
        <section className="actions">
          <h2>Ações</h2>

          {monster.actions.slice(0, 5).map((action) => (
            <article key={action.name}>
              <h3>{action.name}</h3>
              <p>{action.desc}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default MonsterDetails