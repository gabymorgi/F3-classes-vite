import React from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

export const RepoDetail = (props) => {
  const [boolState, setBoolState] = React.useState(false)

  const memoizedLanguages = React.useMemo(() => {
    console.log("memo")
    //calculo super complejo
    const totalLines = Object.values(props.repo.languages).reduce(
      (acc, value) => {
        return acc + value
      },
      0
    )

    const parsedLanguages = Object.entries(props.repo.languages).map(
      ([key, value]) => {
        return {
          name: key,
          percentage: (value / totalLines) * 100,
        }
      }
    )
    /**
     * [
      * {name: 'JavaScript', percentage: 50},
      * {name: 'CSS', percentage: 50},
     * ]
     */

    return parsedLanguages
  }, [props.repo.languages])

  return (
    <div>
      <h1>{props.repo?.name || 'no repo'}</h1>
      <h3>{props.repo?.description || 'no desc'}</h3>
      <div>
        {memoizedLanguages.map((lang) => {
          return (
            <div key={lang.name}>
              <span>{lang.name}</span>&nbsp;
              <span>{Math.round(lang.percentage)} %</span>
            </div>
          )
        })}
      </div>
      <button onClick={() => setBoolState(!boolState)}>
        {boolState ? 'si' : 'no'}
      </button>
    </div>
  )
}
