const AccountList = (props) => {
  return (
    <div className='flex'>
      {props.accounts.map((account) => {
        return (
          <div
            key={account.id}
            className='card'
            onClick={() => props.onClick(account)}
          >
            {account.nombre}
          </div>
        )
      })}
    </div>
  )
}

export default AccountList
