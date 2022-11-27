import styles from './style.module.css';

export default function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid="planet-card">
      <div className={ styles.planets_container }>
        <img
          className={ styles[planetName] }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
      <p className={ styles.planet_name } data-testid="planet-name">{ planetName }</p>
    </div>
  );
}
