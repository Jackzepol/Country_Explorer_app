
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryCard from "./CountryCard";

  afterEach(() => {
  cleanup();
});

describe("CountryCard", () => {

  const country = {
    country: "Mexico",
    iso3: "MEX",
    cities: ["CDMX", "Guadalajara"]
  };

  test("renderiza el nombre del país", () => {

    render(
      <BrowserRouter>
        <CountryCard country={country} />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Mexico")
    ).toBeTruthy();
  });

  test("renderiza el enlace de detalle", () => {

    render(
      <BrowserRouter>
        <CountryCard country={country} />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Ver detalle")
    ).toBeTruthy();
  });

});