import Card from './Components/Card'
import './styles.css'

const Components = () => {
  return (
    <div className='flex-column'>
      <Card>card children</Card>
      <Card title='card title'>card children</Card>
      <Card footer='card footer'>card children</Card>
      <Card title='card title' footer='card footer'>
        card children
      </Card>
    </div>
  )
}

export default Components
