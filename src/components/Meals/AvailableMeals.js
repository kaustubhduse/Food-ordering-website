import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chinese Bhel",
    description: "Tangy and spicy mix of vegetables and sauces.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Medu Vada",
    description: "Crispy and golden brown",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Masala Dosa",
    description: "Crispy, stuffed, savory Indian crepe.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
