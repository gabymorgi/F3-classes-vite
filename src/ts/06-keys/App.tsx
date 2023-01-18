import { List, ListItem } from "./UI/List";
import data from '../../fakeApi/data.json'
import Game from "./Components/Game";

const App = () => {
  return (
    <List>
      {data.map((item) => {
        return (
          <ListItem key={item.id}>
            {/* key must be unique between its siblings */}
            {/* but also should be identitary of elements */}
            <Game game={item} />
          </ListItem>
        )
      })}
    </List>
  );
};

export default App;