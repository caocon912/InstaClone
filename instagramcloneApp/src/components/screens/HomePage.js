import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Avatar, Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon, Container, Content, Body,Left,Right, Button } from 'native-base';
import CardComponent from './CardComponent';
import { TabNavigator } from 'react-navigation';

class HomePage extends Component {
  static navigationOptions={
    tabBarIcon : <Icon name="home"/>
  }
    
  render() {
    return (
      <Container style={styles.container}>
          <Header 
          backgroundColor="white"
          androidStatusBarColor="white">
            <Left><Icon name = "camera" style={{paddingLeft:10}}/></Left>
            <Body><Text>Instagram</Text></Body>
            <Right><Icon name = 'paper-plane' style={{paddingRight:10}}/></Right>
          </Header>
        <Content>
          <CardComponent imageSource = "1" like = "101"/>
          <CardComponent imageSource = "2" like = "144"/>
          <CardComponent imageSource = "3" like = "88"/>
        </Content>
      </Container>
    );
  }
}
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex:0,
    backgroundColor: 'white',
  },
});
