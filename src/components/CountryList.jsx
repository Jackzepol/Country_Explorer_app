

import CountryCard from "./CountryCard";
import styles from "./CountryList.module.scss";

export default function CountryList({ countries }) {
  return (
    <div className={styles.list}>
      {countries.map((country) => (
        <CountryCard key={country.country} country={country} />
      ))}
    </div>
  );
}