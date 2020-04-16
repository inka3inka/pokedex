import React, {Component} from 'react';

import { Input } from 'antd';

const { Search } = Input;

export default function Searcher() {
  return (
    <Search
      className="searcher__tab"
      placeholder="Find pokemon (Name or Number)"
      onSearch={value => console.log(value)}
    />
  )
}
