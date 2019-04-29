import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Avatar, Card, Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon, CardItem, Left, Thumbnail,Body, Container } from 'native-base';
class CardComponent extends Component {
  render() {
    const imageList = {
        "1" : require("./me.jpg"),
        "2" : require("../pictures/me.jpg"),
        "3" : require("./me.jpg")
    }
    return (
    <View style={styles.container}>
       <Card>
    
           <CardItem>
               <Left>
                   <Thumbnail source={require ("./me.jpg")}/>
                   <Body>
                       <Text>Vorum</Text>
                       <Text note>Jan 15,2018</Text>
                   </Body>
               </Left>
           </CardItem>

           <CardItem cardBody>
                <Image source={imageList[this.props.imageSource]} style={{height:200,width:null,flex:1}}/>
           </CardItem>

           <CardItem style={{height:45}}>
               <Left>
                   <Button transparent>
                       <Icon name='heart' style={{color:'black'}}/>
                   </Button>
                   <Button transparent>
                       <Icon name='chatbubbles' style={{color:'black'}}/>
                   </Button>
                   <Button transparent>
                       <Icon name='paper-plane' style={{color:'black'}}/>
                   </Button>
               </Left>
           </CardItem>

           <CardItem style={{height:20}}>
                <Text>{this.props.like}</Text>
           </CardItem>
           
           <CardItem>
                <Text>
                    <Text style={{color:'black'}}>Vorum:</Text>
                    This is comment of post. Today is April 30th 2019 and I am eating a cupcake so sweet.
                </Text>
           </CardItem>
       
       </Card>
    </View>
    );
  }
}
export default CardComponent;
const styles = StyleSheet.create({
  container: {
      flex:1,
    backgroundColor: '#F5FCFF',
  },
  
});
