import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon,Button} from 'native-base';
import {firebaseApp} from './FirebaseConfig';

export default class EditProfile extends Component {  
  static navigationOptions = {
    tabBarIcon :
    <Icon name="create"/>
  }  

  constructor(props){
        super(props)
		this.state ={
            ten: "",
            currentPassword: "",
            newEmail: "",
            sdt:"",
            gioitinh:""
		};
		
  }


  onChangeEmailPress =() =>{
      var user =firebaseApp.auth().currentUser;
      if(user != null){
            user.updateEmail(this.state.newEmail)
            .then(() =>{
                    Alert.alert("Email was changed");
            })
            .catch((error) =>{
                console.log(error.message); 
            })
      }
  }

  

  render() {
    return (
      <View style={styles.container}>
      
            <View style={styles.view1}>
                <View style={styles.view1_1}>
                    <Button transparent>
                        <Icon name='close-circle' style={{color:'red'}}/>
                    </Button>
                    <Text style={{marginLeft:7,fontSize:20}}>Chỉnh sửa trang cá nhân</Text>
                </View>
                <TouchableOpacity onPress={this.onChangeEmailPress}>
                    <Icon name='checkmark-circle' style={{color:'green'}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.view2}>
                <Image 
                    style={styles.userpic}
                    source={{uri:'https://static.giantbomb.com/uploads/scale_small/13/135472/1891759-002ivysaur.png'}}
                
                />
                <View>
                    <Text style={{fontWeight:"bold", fontSize:20}}>Đổi ảnh đại diện</Text>
                </View>
            </View>
            

            <View style={styles.view3}>
                <View style={styles.input}>
                    <Text>Tên: </Text>
                    <TextInput
                        value={this.state.ten}
                        onChangeText={(ten)=>this.setState({ten})}
                    >
                    </TextInput>
                </View>

                {/* <View style={styles.input}>
                    <Text>Password: </Text>
                    <TextInput style={styles.textInput} value={this.state.currentPassword}
                        placeholder="Current Password" 
                        autoCapitalize="none" secureTextEntry={true}
                        onChangeText={(text) => { this.setState({currentPassword: text}) }}
                    />
                </View> */}

                <View style={styles.input}>
                    <Text>Email: </Text>
                    <TextInput 
                        value={this.state.newEmail}
                        keyboardType="email-address"
                        onChangeText={(text) => { this.setState({newEmail: text}) }}
                    >
                    </TextInput>
                </View>

                <View style={styles.input}>
                    <Text>Số điện thoại: </Text>
                    <TextInput
                        keyboardType='numeric'
                        value={this.state.sdt}
                        onChangeText={(sdt)=>this.setState({sdt})}
                    >
                    </TextInput>
                </View>

                <View style={styles.input}>
                    <Text>Giới tính</Text>
                    <TextInput
                        value={this.state.gioitinh}
                        onChangeText={(gioitinh)=>this.setState({gioitinh})}
                    >
                    </TextInput>
                </View>
            </View>

            <View style={styles.view4}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Change_password')}
            ><Text>Đổi mật khẩu</Text></TouchableOpacity>
                
            </View>

        </View>
    );
  }
}
//export default EditProfile;
const styles = StyleSheet.create({
  container: {
    width: 100 + "%",
    height: 100 + "%",
    justifyContent: "center",
    alignItems: "stretch",
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 10,
    
},

view1:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10
},

view1_1:{
    alignContent:'center',
    flexDirection:'row'
},

/*button1:{
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    backgroundColor:'rgb(249, 16, 3)',
    marginLeft:5
},

button2:{
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    backgroundColor: 'rgb(104, 199, 117)'
},*/

view2:{
    flex:3,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
},

userpic:{
    width:70,
    height:70,
    borderRadius:35,
    borderWidth:1  
},

view3:{
    flex:4,
    flexDirection:'column',
    alignItems:'flex-start'
},

input:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'    
},

view4:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'
},
loginButtonTitle: {
    fontSize: 18,
    color: 'white',

},
icons: {
    //width: 300,
    //height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
},
  
});
