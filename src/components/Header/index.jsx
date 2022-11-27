import logo from '../../images/logo-sistema-solar.svg';
import styles from './style.module.css';

export default function Header() {
  return (
    <header>
      <img className={ styles.logo } src={ logo } alt="logo" />
    </header>
  );
}
