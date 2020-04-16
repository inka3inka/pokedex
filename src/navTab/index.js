import React from 'react';
import Searcher from "./Searcher";
import Sider from "./Sider";
import './styles.scss';

export default function NavTab(){
  return (
    <div className="nav__container">
      <Sider/>
      <Searcher />
    </div>
  )
}