import List from './Components/List'
import Title from './Components/Title'

function Practica02() {
  function darleALike() {
    console.log('le diste like, ahora ve a ver la pelicula')
  }
  return (
    <div>
      <h1>RRR</h1>
      <p>
        En 1920, durante el Raj británico, el administrador tiránico
        Scott Buxton y su sádica esposa Catherine visitan un bosque en
        Adilabad, donde secuestran a la fuerza a Malli, una joven con
        talento para el arte, de la tribu Gond . Enfurecido por el
        acto, el guardián de la tribu, Komaram Bheem, se embarca a
        Delhi con la intención de rescatarla, bajo la apariencia de un
        musulmán llamado Akhtar. En otra parte, el Nizamate de
        Hyderabad, simpatizante del Raj, advierte a la oficina de
        Scott del peligro inminente. Sin inmutarse, Catherine solicita
        la ayuda de A. Rama Raju, un ambicioso oficial de la Policía
        Imperial India para sofocar la amenaza. Al embarcarse en su
        nueva misión, Raju y su tío, Venkateswarulu, asisten a varias
        reuniones a favor de la independencia con la esperanza de
        encontrar pistas. Sus opiniones atraen la atención de Lachhu,
        el crédulo ayudante de Bheem.
      </p>
      <button onClick={darleALike}>Dale a like</button>
      <Title title='Generos' />
      <List>
        <li>Accion</li>
        <li>Romance</li>
        <li>drama</li>
      </List>
      <Title title='Actores' />
      <List>
        <li>Leonardo DiCaprio</li>
        <li>Brad Pitt</li>
        <li>Tom Cruise</li>
        <li>Will Smith</li>
        <li>Julia Roberts</li>
        <li>Angelina Jolie</li>
        <li>Meryl Streep</li>
        <li>Scarlett Johansson</li>
      </List>
    </div>
  )
}

export default Practica02
