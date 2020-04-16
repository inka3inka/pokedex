import React, {Component} from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default class Sider extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1'];

  state = {
    openKeys: [],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <div className="nav__upper-tab">

        /*Menu button for mobile*/
        <Menu
          className="menu"
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
          <SubMenu
            key="sub1"
            title={
              <div className="menu__button">
                <img className="menu__icon--small" src="../../icons8-menu%20-light.svg"/>
                <img className="menu__icon--medium" src="../../icons8-menu-medium.svg" />
              </div>
            }
          >
            <Menu.Item key="1" className="menu__item">Option 1</Menu.Item>
            <Menu.Item key="2" className="menu__item">Option 2</Menu.Item>
            <Menu.Item key="3" className="menu__item">Option 3</Menu.Item>
            <Menu.Item key="4" className="menu__item">Option 4</Menu.Item>
          </SubMenu>
        </Menu>

        /*Menu tab for desktops*/
        <div>
        </div>
        <div className="nav__header">Pokedex</div>
        <div className="pokeball__container">
          <img className="pokeball__image--small" src="../../icons8-pokeball-48.png" alt="pokeball"/>
          <img className="pokeball__image--medium" src="../../icons8-pokeball-96-medium.png" alt="pokeball"/>
        </div>
      </div>
    );
  }
}
