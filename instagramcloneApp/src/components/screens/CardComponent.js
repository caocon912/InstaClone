import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Input,Icon, CardItem, Left, Thumbnail,Body, Container,Button,Card } from 'native-base';
import {firebaseApp} from './FirebaseConfig';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);
class CardComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            liked:false,
            likeNumber : 0,
            comment : ''
        }
    } 
    likeToggled(){
        this.setState({
            liked:!this.state.liked
        })
    }

    //get email of user
    userInfo(){
        var user = firebaseApp.auth().currentUser;
        var email;
        if (user!=null){
            email = user.email;
            return email;
        }
    }
    /*displayuserLogin = async ()=>{
        try{
               let userEmail =  await AsyncStorage.getItem('user')
               return userEmail;
        }catch(error){
                console.log(error);
        }
    }*/

    //post comment and save in database
    postComment(){
        let comment = this.state.comment;
        let userEmail = this.userInfo();
        Alert.alert(userEmail);
        let postId = 1;
        firebaseApp.database().ref('Comments').push({
            postId,
            userEmail,
            comment
            
        }).then((data)=>{
                console.log('data',data)
        }).catch((error)=>{
                console.log('error',error)
        })
    }
    render() { 
    const heartIconColor=(this.state.liked) ? "red" : null;
    let userEmail = (this.userInfo());
    let Likednumber = (this.state.liked) ? (this.setState.numberLiked = this.state.likeNumber + 1) : (this.state.likeNumber);
    const imageList = {
        "1" : require("./me.jpg"),
        "2" : require("../pictures/dog.jpg"),
        "3" : require("../pictures/coder.jpg")
    }
    return (
    <View style={styles.container}>
       <Card>
       <TouchableOpacity onPress={this.displayUserLogin}><Text>UserLogin</Text></TouchableOpacity>
           <CardItem>
               <Left>
                   <Thumbnail source={require ("./me.jpg")}/>
                   <Body>
                       <Text style={{ fontWeight: 'bold'}}>Vorum</Text>
                       <Text note>Jan 15,2018</Text>
                   </Body>
               </Left>
           </CardItem>

           <CardItem cardBody>
                <Image source={imageList[this.props.imageSource]} style={{height:200,width:null,flex:1}}/>
           </CardItem>

           <CardItem style={{height:45}}>
               <Left>
                   <Button transparent onPress={() =>{
                    this.likeToggled()}}>
                       <Icon name='heart' style={{color:heartIconColor}}/>
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
                <Text>{Likednumber} likes this</Text>
           </CardItem>
           
           <CardItem>
                <Thumbnail source = {require('../pictures/dog.jpg')} small></Thumbnail>
                <Text>
                    <Text style={{color:'black', fontWeight: 'bold'}}> {this.props.userComment}: </Text>
                    {this.props.comment}
                </Text>
           </CardItem>

            <CardItem>
                <Thumbnail source={require('../pictures/dog.jpg')} small></Thumbnail>
                <Text style={{color:'black', fontWeight: 'bold'}}>{userEmail}</Text>
                <Input
                    placeholder="Write your comment"
                    onChangeText={(comment)=>this.setState({comment})}
                    value={this.state.comment}>
                </Input>
                <TouchableOpacity style={{paddingLeft:10}} onPress={this.postComment.bind(this)}>
                    <Text style={{color:'red'}}>Send</Text>
                </TouchableOpacity>
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
