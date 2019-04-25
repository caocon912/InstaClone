import React, {Componet} from "react";

import { View,Text,StyleSheet,Image,Dimensions,TouchableOpacity} from "react-native";
import config from "../../config";
import {PostFeed} from "../components/container";

export default class InsaClone extends Component{
    render(){
        return(
            <View style={{flex:1,width:100+"%",height:100+"%"}}>
                <View style={styles.temNav}>
                    <Text>Instagram</Text>
                </View>
                <PostFeed />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    temNav:{
        width:100+ "%",
        height:56,
        marginTop:20,
        backgroundColor:"rgb(250,250,250)",
        borderBottomColor:"rgb(233,233,233)",
        boderBottomWidth:StyleSheet.hairlineWidth,
        justifyContent:"center",
        alignItems:"center",
    }
});
