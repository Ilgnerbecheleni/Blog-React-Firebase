import img from '../../assets/comenta DEV.jpg'
import './style.css'
function Home() {
  return (
    <main className='main-section'>
      <section className='text-section'>
      <h1>Bem vindo ao Comenta DEV</h1>
      <p>Aqui, a criatividade é o seu único limite. Imagine um lugar onde você pode compartilhar suas ideias, opiniões e descobertas sobre a área com uma comunidade apaixonada e engajada. O Comenta DEV é mais do que apenas uma plataforma; é um ambiente feito sob medida para todos os entusiastas da área.</p>

<p>Você não apenas pode criar postagens e enviar recados, mas também pode dar vida às suas ideias mais inovadoras. Cada comentário é uma oportunidade única de fazer a diferença e inspirar outros membros da nossa comunidade. E o melhor de tudo, a sua contribuição será exibida de maneira única e especial - uma única vez, como um relâmpago de inspiração.</p>

<p>Então, vá em frente, compartilhe suas paixões, faça novas conexões e deixe a sua marca no mundo do Comenta DEV. Afinal, o seu pensamento é único e merece ser compartilhado com o mundo. Junte-se a nós e seja parte dessa jornada emocionante!</p>
      </section>
      <section>
        <img src={img} alt="imagem do site"  />
      </section>
    </main>
  )
}

export default Home
