import React, {Component} from 'react';
import Searcher from "./Searcher";
import Sider from "./Sider";
import './styles.scss';

export default class NavTab extends Component {
  state = {
    tag: ""
  }

  onDone = (props) => {
    this.setState({
      tag: props
    }, () => this.props.searchPokemon(this.state.tag))
  }

  render(){
    return (
      <div className="nav__container">
        <Sider reload={this.props.reload}/>
        <Searcher onDone={this.onDone}/>
      </div>
    )
  }
}