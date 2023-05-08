import { List, ListItem } from "./UI/List";
import data from '../../fakeApi/games.json'
import Card from "./UI/Card";

const App = () => {
  return (
    <List>
      {data.map((item) => {
        return (
          <ListItem key={item.id}>
            {/* key must be unique between its siblings */}
            {/* but also should be identitary of elements */}

            <Card title={item.name}>
              <img width="100%" src={item.imgUrl} alt={item.name} />
            </Card>
          </ListItem>
        )
      })}
    </List>
  );
};

export default App;