import React, { Component } from 'react';
import {View,Text,StyleSheet, Image,Navigator} from 'react-native';
//import {Navigator} from 'react-navigation'
import Login from '../screens/Login';
import Register from '../screens/Register';



export default class InstaClone extends Component{
    renderSence(route,navigator){
        switch(route.name){
            case 'login': return(
                <Login 
                goRegister={()=>{navigator.push({name:'register'})}}
                />
            )
            case 'register':return(
                <Register 
                goLogin={()=>navigator.push({name:'login'})}
                />
            )
        }
    }
    render(){
        return(
            <Navigator
                initialRoute={{name:Login}}
                renderSence={this.renderSence}>


            </Navigator>
        );
    }
}
