import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import PokeCard from "./PokeCard";
import { screen, render } from "@testing-library/react";

describe("PokeCard", () => {
  describe("PokeCard", () => {
    it("renders the correct pokemon name", () => {
      const pokemon = {
        name: "Pikachu",
        url: "https://pokeapi.co/api/v2/pokemon/25/",
      };
      render(
        <BrowserRouter>
          <PokeCard {...pokemon} />
        </BrowserRouter>
      );
      expect(screen.getByText("Pikachu")).toBeInTheDocument();
    });
  });

  it("renders the correct pokemon image", () => {
    const pokemon = {
      name: "Pikachu",
      url: "https://pokeapi.co/api/v2/pokemon/25/",
    };
    const { getByAltText } = render(
      <BrowserRouter>
        <PokeCard {...pokemon} />
      </BrowserRouter>
    );
    expect(getByAltText("pokemon Pikachu")).toBeInTheDocument();
  });

  it("renders the correct pokemon number", () => {
    const pokemon = {
      name: "Pikachu",
      url: "https://pokeapi.co/api/v2/pokemon/25/",
    };
    const { getByText } = render(
      <BrowserRouter>
        <PokeCard {...pokemon} />
      </BrowserRouter>
    );
    expect(getByText("25")).toBeInTheDocument();
  });
});
