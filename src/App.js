import {Platform, StyleSheet, View,AppRegistry} from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import CategoryList from './Categorylist'

export default class ButtonThemeExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Categories</Text>
        </Header>
        <CategoryList/>
      </Container>
    );
  }
}


