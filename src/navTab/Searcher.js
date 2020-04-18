import React, {Component} from 'react';
import { Input } from 'antd';
const { Search } = Input;

export default class Searcher extends Component {
  state = {
    tag: ""
  }
  render() {

    return (
      <Search
        className="searcher__tab"
        placeholder="Find pokemon (Name or Number)"
        onSearch={value => this.setState({tag: value}, () => this.props.onDone(this.state.tag))}
      />
    )
  }
}
