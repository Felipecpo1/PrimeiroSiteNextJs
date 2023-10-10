import styles from './components/Artigo.module.css'

export default function Home() {
  return (
    <div className=' mt-16'>
      <section className={styles.display}>
        <article>
          <h1>Apresentando meu trabalho</h1>
          <p>Olá! Meu nome é Felipe César!</p> <p>Nesse projeto, vocês encontrarão um pouco sobre meu processo de aprendizado.</p>
          <p>Na parte superior, o menu te fará navegar pelo site e encontrar informações pessoais e profissionais sobre mim, além de fotos e meios para entrar em contato. </p>
          <p>Esse projeto também inclui o desenvolvimento de aplicações em Python, e a tentativa de incorporá-las ao site.</p>
          <p>No momento, me dedico ao básico do projeto.</p>
        </article>
      </section>
    </div>
  )
}
