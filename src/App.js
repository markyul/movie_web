import React from "react";
import PropTypes from "prop-types";

// 인자에 props를 넣으면 안에서 props.fav으로 사용해야 함
function Food({name, img, rating}) {
  return (
    <div>
      <h3>The food is {name} </h3>
      <h4>{rating}/5.0</h4>
      <img src={img} alt={name} />
    </div>
  );
}

const foodList = [
  {
    id: 1,
    name: "kimchi",
    image: "https://s-i.huffpost.com/gen/2960002/images/n-DEFAULT-628x314.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "ramen",
    image: "http://newsimg.hankookilbo.com/2014/11/13/201411130948240783_1.jpg",
    rating: 5.0
  },
  {
    id: 3,
    name: "bibimbab",
    image: "https://togodallas.com/wp-content/uploads/2020/12/0010_B12_%EB%B9%84%EB%B9%94%EB%B0%A5-.jpg",
    rating: 3.7
  },
  {
    id: 4,
    name: "kimbab",
    image: "https://pbs.twimg.com/media/CpaU8jOUsAEDV7j.jpg",
    rating: 4.7
  },
]

function renderFood(food) {
  return (
    // key가 있어야 하므로 사용하지 않아도 id가 있는 것이 좋은듯
    <Food key={food.id} name={food.name} img={food.image} rating={food.rating} />
  );
}

// 타입 체크 용으로 미리 적어 놓는 것
Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodList.map(renderFood)}
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       {foodList.map(food => (
//         <Food key={food.id} name={food.name} img={food.image}/>
//       ))}
//     </div>
//   );
// }

export default App;
