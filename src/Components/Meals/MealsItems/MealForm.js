import { useRef } from 'react';
import styles from './MealForm.module.css';
import Input from '../../UI/Input';
const MealForm = (props) => {
  const inputItemsRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputItemsRef.current.value;
    const enterdAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enterdAmountNumber > 5 ||
      enterdAmountNumber < 1
    ) {
      return;
    }
    props.onAddToCart(enterdAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputItemsRef}
        label={'Amount'}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+Add</button>
    </form>
  );
};
export default MealForm;
