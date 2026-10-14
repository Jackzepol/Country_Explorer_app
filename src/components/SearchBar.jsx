

import styles from "./SearchBar.module.scss";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
