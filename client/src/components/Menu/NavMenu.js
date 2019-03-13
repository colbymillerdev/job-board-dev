import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NavMenu extends Component {
  state = {
    activeItem: 'home'
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary size="large">
          <Menu.Item as={Link} exact="true" to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name="favorites" active={activeItem === 'favorites'} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item name="signup" active={activeItem === 'signup'} onClick={this.handleItemClick} />
            <Menu.Item name="login" active={activeItem === 'login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}
