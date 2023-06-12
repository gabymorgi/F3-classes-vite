import { useState } from 'react'
import countriesData from '@/fakeApi/paises.json'
import provincesData from '@/fakeApi/provincias.json'

function useLocation() {
  const [country, setCountry] = useState()
  const [province, setProvince] = useState()

  const provinces = provincesData.filter(
    (province) => province.country === country
  )

  console.log(provinces, country, provincesData)

  function handleCountryChange(event) {
    setCountry(event.target.value)
    setProvince()
  }

  function handleProvinceChange(event) {
    setProvince(event.target.value)
  }

  return {
    country,
    province,
    countriesList: countriesData,
    provincesList: provinces,
    handleCountryChange,
    handleProvinceChange,
  }
}

export default useLocation
