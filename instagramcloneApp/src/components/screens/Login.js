import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class Login extends Component {
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
                    </View>
                    <View style={styles.between}>
                        <View style={styles.textinputContainer}>
                            <TextInput style={styles.textInput}
                                textContentType='emailAddress'
                                keyboardType='email-address'
                                placeholder="Enter your email">
                            </TextInput>
                        </View>
                        <View style={styles.textinputContainer}>
                            <TextInput style={styles.textInput}
                                placeholder="Enter your password"
                                secureTextEntry={true}>
                            </TextInput>
                        </View>

                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginButtonTitle}>LOGIN</Text>
                        </TouchableOpacity>
                        <Divider style={styles.divider}></Divider>
                        <FontAwesome.Button name="facebook" backgroundColor='#3897f0' style={styles.facebookButton}>
                            <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
                        </FontAwesome.Button>
                        <TouchableOpacity style={styles.textforgot}>
                            <Text style={styles.titles2}>Forgot password?</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.down}>
                        <Text style={styles.titles3}>Don't have an account? Sign up</Text>
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
        flex: 3,
        flexDirection: 'column',
    },
    between: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    down:{
        flex: 2,
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
    textinputContainer: {
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    textInput: {
        width: 280,
        height: 45,
    },
    loginButton: {
        width: 300,
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3897f0',
    },
    loginButtonTitle: {
        fontSize: 18,
        color: 'white',

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
    titles2: {
        color: 'black',
        textAlign: 'center',
        width: 300,
        fontSize: 15,
        marginTop:20,
        textAlign:'right'
    },
    titles3: {
        color: 'black',
        textAlign: 'center',
        width: 300,
        fontSize: 15,
        marginTop:20,
        
    },
    textforgot:{
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});