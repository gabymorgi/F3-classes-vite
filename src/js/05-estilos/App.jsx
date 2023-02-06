import Card from "./Card/CssCard"
import Header from "./Header/Header"

const Components = () => {
  return (
    <>
      <Header />
      <Card title="Card title">
        card body
      </Card>
      <div className="green-theme">
        <Card title="Card title">
          card body
        </Card>
      </div>
      <div className="blue-theme">
        <Card title="Card title">
          card body
        </Card>
      </div>
    </>
  )
}

export default Components
