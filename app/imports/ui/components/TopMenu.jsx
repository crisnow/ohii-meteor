import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';


export default class TopMenu extends React.Component {


  render() {

    return (
        <Menu borderless className="ui borderless topmenu menu">
          <Container>
            <img className="UI tiny image item" src="https://images.contentful.com/q602vtcuu3w3/68e1D8PwDmAWQsMUAYsCys/d1bf49b9c4b314cc92f09bd230b9b878/BTS18_Web.gif?q=80&w=300"/>
            <Menu.Item>Women s</Menu.Item>
            <Menu.Item>Men s</Menu.Item>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Lifestyle</Menu.Item>
            <Menu.Item>Beauty</Menu.Item>
            <Menu.Item className = 'sale item'>Sale</Menu.Item>

            <Menu.Item position = "right"><Icon name = "search" /></Menu.Item>
            <Menu.Item>Sign in</Menu.Item>

          </Container>
        </Menu>
    );
  }
}
