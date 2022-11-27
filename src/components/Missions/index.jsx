import Title from '../Title';
import MissionCard from '../MissionCard';
import missions from '../../data/missions';
import styles from './style.module.css';

export default function Missions() {
  return (
    <div data-testid="missions">
      <section className={ styles.missions_title }>
        <Title headline="MISSÕES" />
      </section>
      <div className={ styles.missions_board }>
        {missions.map((mission) => (
          <MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
      </div>
    </div>
  );
}
