import ghUser from '../fakeApi/ghUser.json'
import Card from './Card/CssCard'
import Header from './Header/Header'
import styles from './Card/CssCard.module.css'

function App() {
  return (
    <div className='flex p-16'>
      <Header />
      <Card title="Card title">
        card body
      </Card>
      <div className="green-theme">
        <Card title="Card title">
          card body
        </Card>
      </div>
      <div className={styles.h1}>
        card body
      </div>
    </div>
  )
}

export default App
