import React from 'react';
import {Searcher} from "./Searcher";
import {Menu} from "./Menu";

export function NavTab(){
  return (
    <div className="nav">
      <Menu/>
      <Searcher/>
    </div>
  )
}