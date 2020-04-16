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
              <img src="../../icons8-menu%20-light.svg"/>
            </div>
          }
        >
          <Menu.Item key="1" className="menu__item">Option 1</Menu.Item>
          <Menu.Item key="2" className="menu__item">Option 2</Menu.Item>
          <Menu.Item key="3" className="menu__item">Option 3</Menu.Item>
          <Menu.Item key="4" className="menu__item">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
