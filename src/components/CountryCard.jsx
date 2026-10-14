
import { Link } from "react-router-dom";
import styles from "./CountryCard.module.scss";

export default function CountryCard({ country }) {

  return (
    <div className={styles.card}>

      <h3>{country.country}</h3>

      <p>
        Ciudades disponibles: {country.cities.length}
      </p>

      <Link to={`/country/${country.iso3}`}>
        Ver detalle
      </Link>

    </div>
  );
} 