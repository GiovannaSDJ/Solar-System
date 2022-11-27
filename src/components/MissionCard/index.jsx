import calendar from '../../images/calendário.svg';
import pin from '../../images/pin.svg';
import flag from '../../images/bandeira.svg';
import styles from './style.module.css';

export default function MissionCard({ name, year, country, destination }) {
  return (
    <div className={ styles.mission_card }>
      <div>
        <div className={ styles.mission_name }>
          <p>{ name }</p>
        </div>
        <div className={ styles.mission_info }>
          <div className={ styles.year }>
            <img src={ calendar } alt="" />
            <p>{ year }</p>
          </div>
          <div className={ styles.country }>
            <img src={ pin } alt="" />
            <p>{ country }</p>
          </div>
          <div className={ styles.destination }>
            <img src={ flag } alt="" />
            <p>{ destination }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
