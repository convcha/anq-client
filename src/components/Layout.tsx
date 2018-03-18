import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, List, Menu, Segment } from 'semantic-ui-react';

const logo = require('../logo.svg');
const Layout: React.SFC = ({children}) => (
  <div
    style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    }}
  >
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

    <Container text style={{marginTop: '7em', flex: '1'}}>
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