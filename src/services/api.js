const BASE_URL = 'https://www.dnd5eapi.co/api/2014'

export async function getMonsters() {
  const response = await fetch(`${BASE_URL}/monsters`)

  if (!response.ok) {
    throw new Error('Erro ao buscar monstros')
  }

  const data = await response.json()
  return data.results
}

export async function getMonsterByIndex(index) {
  const response = await fetch(`${BASE_URL}/monsters/${index}`)

  if (!response.ok) {
    throw new Error('Erro ao buscar detalhes do monstro')
  }

  return response.json()
}