import React from 'react';
import {Searcher} from "./Searcher";
import {Sider} from "./Menu";

export function NavTab(){
  return (
    <div className="nav">
      <Sider/>
      <Searcher />
    </div>
  )
}