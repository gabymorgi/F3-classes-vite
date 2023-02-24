import Item from './Components/Item'
import List from './Components/List'

const Components = () => {
  return (
    <>
      <List>
        <Item>item 1</Item>
        <Item>item 2</Item>
        <Item>item 3</Item>
        <Item>item 4</Item>
        <Item>item 5</Item>
        <Item>item 6</Item>
        <Item>item 7</Item>
        <Item>item 8</Item>
      </List>
      <div className='compact-theme'>
        <List>
          <Item>item 1</Item>
          <Item>item 2</Item>
          <Item>item 3</Item>
          <Item>item 4</Item>
          <Item>item 5</Item>
          <Item>item 6</Item>
          <Item>item 7</Item>
          <Item>item 8</Item>
        </List>
      </div>
    </>
  )
}

export default Components
