import { message } from 'antd'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Card } from './components/Card'
import { useQuery } from './hooks/useQuery'

const Error = () => {
  return (
    <div>
      <h1>Error</h1>
    </div>
  )
}

const App = () => {
  const { data: dataNext, loading: loadingNext } = useQuery(
    'https://api.github.com/repos/vercel/next.js'
  )

  function handleCLick() {
    //
  }


  return (
    <>
      <header>Soy un heade</header>
      <ErrorBoundary
        FallbackComponent={Error}
        onError={(error, info) => {
          message.error(`Error ${error.message} ${info.componentStack}`)
        }}
      >
        <Card loading={loadingNext} data={dataNext} />
      </ErrorBoundary>
      <footer>soy un footer</footer>
    </>
  )
}

export default App
