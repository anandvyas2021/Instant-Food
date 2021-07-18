import { Fragment } from 'react';
import MealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>ReactFood</h2>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>

      <div className={styles['main-image']}>
        <img src={MealsImg} alt="Dishes on the table" />
      </div>
    </Fragment>
  );
};
export default Header;
