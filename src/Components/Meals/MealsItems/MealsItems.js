import { useContext } from 'react';
import MealForm from './MealForm';
import styles from './MealsItems.module.css';
import CartContext from '../../../store/cart-context';

const MealsItems = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealsItems;
