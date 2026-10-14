

import axios from "axios";

export const getAllCountries = async () => {
  const response = await axios.get(
    "https://countriesnow.space/api/v0.1/countries"
  );
  console.log(response.data.data);
  return response.data.data;
};
