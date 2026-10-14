
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/slices/CountrySlice";
import styles from "./Home.module.scss";

import CountryList from '../components/CountryList'
import SearchBar from "../components/SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.countries);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  // Filtrar por nombre
  const filteredCountries = list.filter((country) =>
    country.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Paises del mundo</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <CountryList countries={filteredCountries} />
    </div>
  );
}