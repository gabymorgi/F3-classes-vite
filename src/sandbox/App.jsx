import { Fragment } from 'react';
import games from '../fakeApi/games.json'
import Card from "./UI/Card";
import React from 'react';

const App = () => {

  return (
    <>
      <div className="flex">
        <Card
          title="Nuevo titulo"
          id="random-element"
          key="random-element"
        >
          asdfads
        </Card>
      </div>
    </>
  );
};

export default App;