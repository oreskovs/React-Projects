import FoodItem from "./FoodItem.JSX";

export default function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
