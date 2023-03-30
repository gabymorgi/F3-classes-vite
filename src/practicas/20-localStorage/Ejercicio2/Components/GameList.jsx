const GametList = (props) => {
  return (
    <div className='flex'>
      {props.games.map((game) => {
        return (
          <div
            key={game.id}
            className='card'
            onClick={() => props.onClick?.(game)}
          >
            {game.name}
          </div>
        )
      })}
    </div>
  )
}

export default GametList
