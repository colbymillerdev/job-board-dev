import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Segment, List, Button, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import profilePic from '../../assets/profileimg.jpg';

const Header = styled.div`
  font-size: 48px;
  margin-top: 2em;
  margin-bottom: 0.5em;
  text-align: center;
  font-family: 'gill sans';
  font-weight: bold;
  color: #1b1c1d;
`;

const SubHeader = styled.div`
  font-size: 24px;
  margin-top: 0.5em;
  text-align: center;
  color: gray;
  font-family: 'gill sans';
  margin-bottom: 1em;
`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header>Remote Work for Devs!</Header>
          <SubHeader>
            Looking for an awesome job that you can work from anywhere in the world? This is the perfect place!
          </SubHeader>
          <Grid>
            <Grid.Column textAlign="center">
              <Button style={{ marginBottom: 30, justifyContent: 'center' }} primary size="medium">
                <Link to="/employer/post-job" style={{ color: 'white' }}>
                  Employer? Post a job!
                </Link>
              </Button>
            </Grid.Column>
          </Grid>
          <Segment inverted>
            <List animated divided inverted relaxed verticalAlign="middle" size="big">
              <List.Item>
                <Image avatar src={profilePic} />
                <List.Content>
                  <List.Header as="a">Google | UI/UX Designer</List.Header>
                  <List.Description>Posted 4 hours ago</List.Description>
                </List.Content>
                <List.Content floated="right">
                  <Button primary size="medium">
                    Apply
                  </Button>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src={profilePic} />
                <List.Content>
                  <List.Header>Slack | Full Stack Engineer</List.Header>
                  <List.Description>Posted 1 day ago</List.Description>
                </List.Content>
                <List.Content floated="right">
                  <Button primary size="medium">
                    Apply
                  </Button>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src={profilePic} />
                <List.Content>
                  <List.Header>Facebook | Software Engineer</List.Header>
                  <List.Description>Posted 3 days ago</List.Description>
                </List.Content>
                <List.Content floated="right">
                  <Button primary size="medium">
                    Apply
                  </Button>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Container>
      </div>
    );
  }
}
