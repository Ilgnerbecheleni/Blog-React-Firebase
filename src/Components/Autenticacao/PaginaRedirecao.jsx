import './styles.css'
import img from '../../assets/acess.png'
function PaginaRedirecao() {
  return (
    <main className='redirecao'>
      <h1>Você nao esta logado por favor faça o login</h1>
      <img src={img} alt="" />
      <a href="/login">Login</a>
    </main>
  )
}

export default PaginaRedirecao
