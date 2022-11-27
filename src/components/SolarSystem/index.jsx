import Title from '../Title';
import PlanetCard from '../PlanetCard';
import planets from '../../data/planets';
import styles from './style.module.css';

export default function SolarSystem() {
  return (
    <div>
      <section className={ styles.title }>
        <Title headline="PLANETAS" />
      </section>
      <section className={ styles.planets }>
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </section>
      <div className={ styles.central_line } />
    </div>
  );
}
