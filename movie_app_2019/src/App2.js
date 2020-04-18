import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  { id: 1, name: "kimchi", image: "/images/kimchi.jpg", rating: 5 },
  { id: 2, name: "ramen", image: "/images/ramen.jpg", rating: 4 },
  { id: 3, name: "coffee", image: "/images/coffee.jpg", rating: 3 },
  { id: 4, name: "samgiopsal", image: "/images/samgiopsal.jpg", rating: 2 },
  { id: 5, name: "kimbap", image: "/images/kimbap.jpg", rating: 1 },
];
foodILike.map((current) => {
  return current + "!";
});

function renderFood(dish) {
  console.log(dish);
  return (
    <Food
      key={dish.id}
      name={dish.name}
      image={dish.image}
      rating={dish.rating}
    ></Food>
  );
}

function Food(props) {
  return (
    <div>
      <h2>I like {props.name}</h2>
      <h3>{props.rating}/5</h3>
      <h5>{props.image}</h5>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}
export default App;
