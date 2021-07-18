import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const emptyInput = (value) => value.trim() === '';

const validPostal = (value) => value.length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !emptyInput(enteredName);
    const enteredStreetIsValid = !emptyInput(enteredStreet);
    const enteredPostalCodeIsValid = !validPostal(enteredPostalCode);
    const enteredCityIsValid = !emptyInput(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };
  const nameControlClasses = `${styles.control} ${
    formInputValidity.name ? '' : styles.invalid
  }`;
  const streetControlClasses = `${styles.control} ${
    formInputValidity.street ? '' : styles.invalid
  }`;
  const postalCodeControlClasses = `${styles.control} ${
    formInputValidity.postalCode ? '' : styles.invalid
  }`;
  const cityControlClasses = `${styles.control} ${
    formInputValidity.city ? '' : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputValidity.street && <p>Please enter a valid Street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="code">Postal Code</label>
        <input ref={postalCodeInputRef} type="number" id="postalCode" />
        {!formInputValidity.postalCode && (
          <p>Please enter a valid Postal-Code(% characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart}>Cancel</button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
