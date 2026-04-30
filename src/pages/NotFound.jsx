import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="container not-found">
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <Link to="/">Voltar para a Home</Link>
    </main>
  )
}

export default NotFound