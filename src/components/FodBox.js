import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ foodProp }) {
  return (
    <Col>
      <Card
        title={foodProp.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={foodProp.image} height={60} alt="foodProp" />
        <p>Calories: {foodProp.calories}</p>
        <p>Servings: {foodProp.servings}</p>
        <p>
          <b>
            Total Calories: {foodProp.calories} * {foodProp.serving}{' '}
          </b>{' '}
          kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
