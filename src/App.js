import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import './App.css';
import FoodBox from './components/FodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [theFood, setTheFood] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm setTheFood={setTheFood} theFood={theFood} />

      <Divider>Food List</Divider>
      {theFood.map((food) => {
        return <FoodBox foodProp={food} />;
      })}

      {/* -------------------------------ITERATON 1-------------------------------------------------------- */}
      {/* <div>
        {theFood.map((food) => (
          <div>
            <p>{food.name}</p>
            <img src={food.image} style={{ width: '100px' }} />
          </div>
        ))}
      </div> */}

      {/* ---------------------------------------ITERATION 2---------------------------------------------- */}
      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}
    </div>
  );
}

export default App;
