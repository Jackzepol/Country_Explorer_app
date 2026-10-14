

import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/slices/FavoritesSlice"; 
import styles from "./CountryDetail.module.scss";

export default function CountryDetail() {

  const dispatch = useDispatch();

  const { code } = useParams();

  const countries = useSelector(
    (state) => state.countries.list
  );

  const country = countries.find(
    (item) => item.iso3 === code
  );

  if (!country) {

    return (
      <div className={styles.container}>
        <h2>País no encontrado</h2>

        <Link to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>{country.country}</h1>

      <div className={styles.info}>
        <p>
          Código ISO2: {country.iso2}
        </p>

        <p>
          Código ISO3: {country.iso3}
        </p>

        <p>
          Número de ciudades:
          {" "}
          {country.cities.length}
        </p>
      </div>

      <h2 className={styles.subtitle}>Ciudades</h2>

      <ul className={styles.cityList}>
        {country.cities.map((city) => (
          <li key={city}>
            {city}
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button className={styles.favoriteButton} onClick={() => dispatch(addFavorite(country))} >
          Agregar a favoritos
        </button>

        <Link className={styles.backButton} to="/">
          ← Volver
        </Link>
      </div>

    </div>
  );
} 
