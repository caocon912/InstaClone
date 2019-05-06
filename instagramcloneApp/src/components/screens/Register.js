import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard,Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {firebaseApp} from '../screens/FirebaseConfig.js'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }

    }
    Dangky() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                Alert.alert(
                    'Alert Title',
                    'Dang ki thanh cong : ' + this.state.email,
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                );
                this.setState({
                    email: '',
                    password: '',
                })
            })
            .catch(function (error) {
                Alert.alert(
                    'Alert Title',
                    'Dang ki that bai : ',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                );
            });
        }
        render() {
            const Divider = (props) => {
                return <View {...props}>
                    <View style={styles.line}></View>
                    <Text style={styles.textOr}>OR</Text>
                    <View style={styles.line}></View>

                </View>
            }
            return (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.up}>
                            <Text style={styles.titles}>Instagram</Text>
                            <Text style={styles.titles2}>Sign up to see photos and videos from your friends.</Text>
                        </View>
                        <View style={styles.between}>
                            <FontAwesome.Button name="facebook" backgroundColor='#3897f0' style={styles.facebookButton}>
                                <Text style={styles.loginButtonTitle}>Log in with Facebook</Text>
                            </FontAwesome.Button>
                            <Divider style={styles.divider}></Divider>
                            <View style={styles.textinputContainer}>
                                <TextInput style={styles.textInput}
                                    textContentType='emailAddress'
                                    keyboardType='email-address'
                                    placeholder="Email"
                                    onChangeText={(email)=>this.setState({email})}
                                    value={this.state.email}>
                                </TextInput>
                            </View>
                            <View style={styles.textinputContainer}>
                                <TextInput style={styles.textInput}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    onChangeText={(password)=>this.setState({password})}
                                    value={this.state.password}>
                                </TextInput>
                            </View>

                            <TouchableOpacity style={styles.loginButton} onPress={()=>{this.Dangky()}}>
                                <Text style={styles.loginButtonTitle}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.down}>
                            <View style={styles.textinputContainer}>
                                <Text style={styles.titles3}>By signing up, you agree to our Terms , Data Policy and Cookies Policy</Text>
                            </View>
                        </View>
                        <View style={styles.down2}>
                            <Text style={styles.titles3}>Have an account? Log in</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )
        }
    }
    const styles = StyleSheet.create({
        container: {
            width: 100 + "%",
            height: 100 + "%",
            justifyContent: "center",
            alignItems: "stretch",
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white',

        },
        up: {

            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        down: {

            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        down2: {

            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        between: {

            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },

        titles: {
            color: 'black',
            textAlign: 'center',
            width: 400,
            fontSize: 30,
        },
        titles2: {
            color: 'black',
            textAlign: 'center',
            width: 300,
            fontSize: 20,
            marginTop: 15,
            marginBottom: 15,
        },
        titles3: {
            color: 'black',
            textAlign: 'center',
            width: 300,
            fontSize: 15,
            marginTop: 10,
        },
        textinputContainer: {
            paddingHorizontal: 10,
            borderRadius: 6,
            marginBottom: 10,
            backgroundColor: 'rgba(255,255,255,0.2)',
        },
        textInput: {
            width: 300,
            height: 40,
        },
        loginButton: {
            width: 300,
            height: 40,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3897f0',
            marginTop: 20,
        },
        loginButtonTitle: {
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold'

        },
        facebookButton: {
            width: 300,
            height: 40,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',

        },
        line: {
            height: 1,
            flex: 2,
            backgroundColor: 'black',
        },
        textOr: {
            flex: 1,
            textAlign: 'center',
        },
        divider: {
            flexDirection: 'row',
            height: 40,
            width: 298,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    export default Register