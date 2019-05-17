import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon,Button,CardItem,Thumbnail,Input} from 'native-base';
import {firebaseApp} from './FirebaseConfig';



class ProfilePage extends Component {  
  static navigationOptions = {
    header: null,
      tabBarIcon :
        <Icon name="person"/>
  }  

  constructor(){
    super();
    this.state={
        liked:false,
        screenWidth:Dimensions.get("window").width,
        likeNumber:0,
        comment:'',
        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
    this.itemRef = firebaseApp.database();
  } 

  likeToggled(){
    this.setState({
        liked:!this.state.liked
    })
  }

  userInfo(){
    var user = firebaseApp.auth().currentUser;
    var email;
    if (user!=null){
        email = user.email;
        return email;
    }
  }

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
  displayComment(itemRef){
    //1 mảng lưu comment từ db
    var items = [];
    this.itemRef.ref('Comments').on('child_added',(dataSnapshot)=>{
        items.push({
            comment:dataSnapshot.val().comment,
            userEmail:dataSnapshot.val().userEmail,
            avatar : dataSnapshot.val().avatar,
            _key: dataSnapshot.key
        });
        //đưa mảng vào datasource để hiển thị ra listview
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
        });
    });
    this.itemRef.ref('Comments').on('child_removed',(dataSnapshot)=>{
        items = items.filter((x)=>x._key !== dataSnapshot.key);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
        })
    });
}

//delete comment in db
deleteComment(rowData){
    //this.itemRef.ref('Comments').child(rowData._key).remove();
    //this.displayComment;
    Alert.alert(
        'thông báo',
        'Xóa bình luận? : ',
        [
            {
                text: 'OK',
                onPress:()=>{
                    this.itemRef.ref('Comments').child(rowData._key).remove();
                    this.displayComment;
                }
            },
            { 
                text: 'cancel', 
                onPress: () =>console.log('Cancel Pressed')
            },
        ],
        { cancelable: false },
    );
}

  render() {

    const imageUri='https://images8.alphacoders.com/618/618469.jpg';
    const heartIconColor=(this.state.liked) ? "red" : null;
    let Likednumber = (this.state.liked) ? (this.setState.numberLiked = this.state.likeNumber + 1) : (this.state.likeNumber);
    let userEmail = (this.userInfo());


    return (
      <View style={{flex:1,width:100+"%"}}>
        <View style={styles.view1}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:15}}>
                  {userEmail}
                </Text>
            </View>
            <View>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('NavigatorLogout')}}><Text style={{fontWeight:"bold",fontSize:30}}>...</Text></TouchableOpacity>
                
            </View>
        </View>

        <View style={styles.view2}>
            <View style={styles.view2_1}>
                <Image 
                    style={styles.userpic}
                    source={{uri:'https://static.giantbomb.com/uploads/scale_small/13/135472/1891759-002ivysaur.png'}}
                
                />
                <View>
                    <Text style={{fontWeight:"bold"}}> {userEmail}</Text>
                </View>
            </View>
            <View style={styles.view2_2}>
                <View style={styles.follow}>
                    <View style={styles.imfo_follow}>
                        <Text>2</Text>
                        <Text>Bài viết</Text>
                    </View>
                    <View style={styles.imfo_follow}>
                        <Text>12</Text>
                        <Text>Người theo...</Text>
                    </View>
                    <View style={styles.imfo_follow}>
                        <Text>14</Text>
                        <Text>Đang theo...</Text>
                    </View>
                </View>

                <View style={styles.button}>
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('EditProfilePage')}>
                <Text >Chỉnh sửa trang cá nhân</Text>
                </TouchableOpacity>
                    
                </View>
            </View>
        </View>

        <View style={styles.view3}>
            
        </View>

        <View style={styles.view4}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:'space-between'}} >
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image 
                        style={styles.userpic1}
                        source={{uri:'https://static.giantbomb.com/uploads/scale_small/13/135472/1891759-002ivysaur.png'}}
                    
                    />
                    <Text style={{fontWeight:"bold",fontSize:15}}>{userEmail}</Text>
                </View>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:30}}>...</Text>
                </View>
            </View>
            <TouchableOpacity 
                activeOpacity={0.7}
                onPress={() =>{
                    this.likeToggled();
                }}
            >
                <Image 
                    style={{width: this.state.screenWidth,height:360,marginTop:10}}
                    source={{uri:imageUri}} 
                    //resizeMode={'cover'}       
                />
            </TouchableOpacity>
            <View style={styles.like}>
                <View style={styles.icon}>
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
                </View>
                <View style={{flexDirection:"column",alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",fontSize:15}}>{Likednumber}Likes</Text>
                </View>
                
            </View>
          
        </View>

        <View>
            <CardItem>
              <ListView
                  dataSource = {this.state.dataSource}
                  renderRow = {(rowData)=>
                  <View>
                      <View style={{flexDirection: 'row'}}>
                          <Thumbnail source={{uri: rowData.avatar}} small></Thumbnail>
                          <Text style={{color:'black', fontWeight: 'bold'}}>{rowData.userEmail}:</Text>
                          <Text>{rowData.comment}</Text>
                          <TouchableOpacity onPress={()=>this.deleteComment(rowData)}><Text style={{color:'red'}}>Xóa</Text></TouchableOpacity>
                      </View>
                  </View>
                  }
              />
           </CardItem>

           <CardItem>
              <Thumbnail source={{uri:'https://static.giantbomb.com/uploads/scale_small/13/135472/1891759-002ivysaur.png'}} small></Thumbnail>
              <Text style={{color:'black', fontWeight: 'bold'}}>{userEmail}</Text>
              <Input
                  placeholder="Write your comment"
                  onChangeText={(comment)=>this.setState({comment})}
                  value={this.state.comment}>
              </Input>
              <TouchableOpacity style={{paddingLeft:10}} onPress={this.postComment.bind(this)}>
                <Icon name = 'send' style={{paddingRight:10}}/>
              </TouchableOpacity>
            </CardItem>
        </View>
        
    </View>
    );
  }
  componentDidMount(){
    this.displayComment(this.itemRef);
  }
}
export default ProfilePage;
const styles = StyleSheet.create({
  view1:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  
  view2:{
    flex:2,
    flexDirection:'row',
    //justifyContent:'space-between',
    backgroundColor: 'white',
    alignItems:'center'
  },

  view2_1:{
    flex:1,
    flexDirection:'column',
    marginLeft:20
  },

  userpic:{
    width:70,
    height:70,
    borderRadius:35,
    borderWidth:1  
  },

  view2_2:{
    flex:4,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },

  follow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },

  imfo_follow:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },

  button:{
    borderWidth:1,
    width:70+"%",
    backgroundColor:'lightyellow',
    //color:'black',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginTop:10
  },

  view3:{
    flex:0.5,
    backgroundColor: 'gray'
  },

  view4:{
    flex:9,
    flexDirection:'column',
    backgroundColor: 'white'
  },

  userpic1:{
    width:40,
    height:40,
    borderRadius:20,
    borderWidth:1,
    marginLeft:10  
  },

  icon:{
      
      borderColor:"blue",
      borderTopWidth:StyleSheet.hairlineWidth,
      borderBottomWidth:StyleSheet.hairlineWidth,
      flexDirection:'row'
  },

  like:{
      flexDirection:'row',
      justifyContent:'space-between'
      
  }
  
});
