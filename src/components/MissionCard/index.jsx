import calendar from '../../images/calendário.svg';
import pin from '../../images/pin.svg';
import flag from '../../images/bandeira.svg';
import styles from './style.module.css';

export default function MissionCard({ name, year, country, destination }) {
  return (
    <div className={ styles.mission_card }>
      <div data-testid="mission-card">
        <div className={ styles.mission_name }>
          <p data-testid="mission-name">{ name }</p>
        </div>
        <div className={ styles.mission_info }>
          <div className={ styles.year }>
            <img src={ calendar } alt="" />
            <p data-testid="mission-year">{ year }</p>
          </div>
          <div className={ styles.country }>
            <img src={ pin } alt="" />
            <p data-testid="mission-country">{ country }</p>
          </div>
          <div className={ styles.destination }>
            <img src={ flag } alt="" />
            <p data-testid="mission-destination">{ destination }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
