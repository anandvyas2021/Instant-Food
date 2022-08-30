import React from 'react';
import styles from './Input.module.css';
const Input = React.forwardRef((props, ref) => {
  return (
    <section className={styles.input}>
      <label>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </section>
  );
});
export default Input;
