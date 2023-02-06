import Header from "./Header"
import Card from "./Card"
import Tag from "./Tag"
import "./styles.css"
import Button from "./Button"

const Components = () => {
  function handleClick() {
    console.log("click")
  }
  return (
    <>{/* React.Fragment */}
      {/** nos permite devolver varios elementos sin envolverlos en un div */}

      <Header />
      <Tag>Platformer</Tag>
      <Card title="Card title">
        card body
      </Card>
      <Button loading={false}>Click me</Button>
      <Button loading={true}>Click me</Button>
      <Button disabled={true}>Click me</Button>
      <Button onClick={handleClick}>Click me</Button>
    </>
  )
}

export default Components
