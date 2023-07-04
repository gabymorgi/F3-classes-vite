import Item from './Components/Item'
import List from './Components/List'

const Components = () => {
  return (
    <>
      <ul>
        <li>Elantris</li>
        <li>El camino de los reyes</li>
        <li>El imperio final</li>
        <li>El pozo de la ascensión</li>
        <li>El héroe de las eras</li>
        <li>El aliento de los dioses</li>
        <li>Palabras radiantes</li>
        <li>Juramentada</li>
      </ul>
      <hr />
      <List>
        <Item>Elantris</Item>
        <Item>El camino de los reyes</Item>
        <Item>El imperio final</Item>
        <Item>El pozo de la ascensión</Item>
        <Item>El héroe de las eras</Item>
        <Item>El aliento de los dioses</Item>
        <Item>Palabras radiantes</Item>
        <Item>Juramentada</Item>
      </List>
      <hr />
      <div className='compact-theme'>
        <List>
          <Item>Elantris</Item>
          <Item>El camino de los reyes</Item>
          <Item>El imperio final</Item>
          <Item>El pozo de la ascensión</Item>
          <Item>El héroe de las eras</Item>
          <Item>El aliento de los dioses</Item>
          <Item>Palabras radiantes</Item>
          <Item>Juramentada</Item>
        </List>
      </div>
    </>
  )
}

export default Components
