


import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/slices/FavoritesSlice";

import styles from "./Favorites.module.scss";

export default function Favorites() {

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.list
  );

  return (

    <div className={styles.container}>

      <h1 className={styles.title}>
        Favoritos
      </h1>

      {favorites.length === 0 ? (

        <p className={styles.empty}>
          No hay favoritos guardados.
        </p>

      ) : (

        <div className={styles.list}>

          {favorites.map((country) => (

            <div
              key={country.iso3}
              className={styles.card}
            >

              <div className={styles.info}>

                <h3>
                  {country.country}
                </h3>

                <p>
                  ISO3: {country.iso3}
                </p>

              </div>

              <button
                className={styles.button}
                onClick={() =>
                  dispatch(
                    removeFavorite(country.iso3)
                  )}
              >
                Eliminar
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}