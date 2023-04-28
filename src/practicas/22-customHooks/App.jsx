import useLocalStorage from './hooks/useLocalStorage'
import useLocation from './hooks/useLocation'

const App = () => {
  const [submitData, setSubmitData] = useLocalStorage('submitedCountry')
  const {
    country,
    province,
    countriesList,
    provincesList,
    handleCountryChange,
    handleProvinceChange,
   } = useLocation()

   console.log(provincesList)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitData({ country, province })
  }

  return (
    <div>
      {submitData && (
        <div>
          <h2>Último país enviado</h2>
          <p>País: {submitData.country}</p>
          <p>Provincia: {submitData.province}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <select
          id='country-select'
          value={country}
          onChange={handleCountryChange}
        >
          <option value=''>Seleccionar país</option>
          {countriesList.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          id='province-select'
          value={province}
          onChange={handleProvinceChange}
          disabled={!country}
        >
          <option value=''>Seleccionar provincia</option>
          {provincesList.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <button type='submit' disabled={!province}>
          Enviar
        </button>
      </form>
    </div>
  )
}

export default App
