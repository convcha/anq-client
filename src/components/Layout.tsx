import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown';
// import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';
import Sidebar from 'semantic-ui-react/dist/commonjs/modules/Sidebar/Sidebar';

// const logo = require('../logo.svg');

const Layout: React.SFC = ({children}) => (
  <>
    <Sidebar
      as={Menu}
      visible
      inverted
      fixed={'left'}
      vertical
    >
      <Menu.Item as={Link} to={'/'} header>
        {/*<Image*/}
          {/*avatar*/}
          {/*size="mini"*/}
          {/*src={logo}*/}
        {/*/>*/}
        <span style={{verticalAlign: 'middle'}}>ANQ</span>
      </Menu.Item>
      <Menu.Item as={Link} to={'/users'}>
        User
      </Menu.Item>
      <Menu.Item as={Link} to={'/hello'}>
        Hello
      </Menu.Item>
    </Sidebar>
    {/*<div className="ui visible inverted left vertical sidebar menu">*/}
      {/*<a className="item">Home </a>*/}
      {/*<a className="item">Page 1</a>*/}
      {/*<a className="item">Page 2</a>*/}
    {/*</div>*/}

    <Menu
      fixed={'top'}
    >
      <Menu.Item>
        HOME
      </Menu.Item>
      <Menu.Item>
        HOME
      </Menu.Item>
      <Menu.Menu position={'right'}>
        <Dropdown text="Dropdown" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
    {/*<div className="ui top fixed menu">*/}
      {/*<a className="item menu-trigger">Menu</a>*/}
      {/*<a className="item">Page 1</a>*/}
      {/*<a className="item">Page 2</a>*/}
    {/*</div>*/}

    <Container text style={{marginTop: '3em'}}>
      {children}
    </Container>

    {/*<div className="pusher">*/}
      {/*<div className="ui basic segment">*/}
        {/*<h3 className="ui header">Hello there</h3>*/}
      {/*</div>*/}
    {/*</div>*/}
  </>
);

export default Layout;