import React from "react";
import {PokedexView} from "./PokedexView";
import {NavTab} from "./NavTab";

export function MainContainer() {

    return (
      <div className="container">
        <NavTab />
        Komponent funkcyjny
        <PokedexView />
      </div>
    )

}