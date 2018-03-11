import * as React from 'react';
import { Container, Image, List, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const logo = require('../logo.svg');
const Layout: React.SFC = ({children}) => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to={'/'} header>
          <Image
            size="mini"
            src={logo}
            style={{marginRight: '1.5em'}}
          />
          ANQ
        </Menu.Item>
        <Menu.Item as={Link} to={'/users'}>
          User
        </Menu.Item>
        <Menu.Item as={Link} to={'/hello'}>
          Hello
        </Menu.Item>
      </Container>
    </Menu>

    <Container text style={{marginTop: '7em'}}>
      {children}
    </Container>

    <Segment
      inverted
      vertical
      style={{margin: '5em 0em 0em'}}
    >
      <Container textAlign="center">
        <Image
          centered
          size="mini"
          src={logo}
        />
        <List horizontal inverted divided link>
          <List.Item as="a" href="#">Site Map</List.Item>
          <List.Item as="a" href="#">Contact Us</List.Item>
          <List.Item as="a" href="#">Terms and Conditions</List.Item>
          <List.Item as="a" href="#">Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default Layout;