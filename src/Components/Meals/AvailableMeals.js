import { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";

import MealsItems from "./MealsItems/MealsItems";
import Card from "components/UI/Card";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-6bf1c-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }

      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.mealsIsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.httpError}>
        <p>{httpError}</p>
      </section>
    );
  }

  // useEffect(() => {
  //   const fetchMeals = () => {
  //     fetch('https://food-order-6bf1c-default-rtdb.firebaseio.com/meals.json')
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Something Went Wrong');
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const loadedMeals = [];
  //         for (const key in data) {
  //           loadedMeals.push({
  //             id: key,
  //             name: data[key].name,
  //             description: data[key].description,
  //             price: data[key].price,
  //           });
  //         }
  //         setMeals(loadedMeals);
  //         setIsLoading(false);
  //       });
  //   };
  //   fetchMeals()
  //     .then()
  //     .catch((error) => {
  //       setIsLoading(false);
  //       setHttpError(error.message);
  //     });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section className={styles.mealsIsLoading}>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }
  // if (httpError) {
  //   return (
  //     <section className={styles.httpError}>
  //       <p>{httpError}</p>
  //     </section>
  //   );
  // }
  const Menu = meals.map((meal) => (
    <MealsItems
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{Menu}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
