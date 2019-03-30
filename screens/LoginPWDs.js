import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput 
} from 'react-native';

import {Button,Text} from 'native-base';

export default class LoginPWDs extends React.Component {


	render() {
		return(
			<View style={styles.container}>
				<Image source={require('../assets/images/logo.png')}
              style={styles.welcomeImage}
            />   
				<TextInput style={styles.inputBox} 
              
              placeholder="Email"
              placeholderTextColor = "#444FAD"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox}        
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#444FAD"
              ref={(input) => this.password = input}
              />
           <Button 
            style={{
              backgroundColor: "#444FAD",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 15}}
            onPress={() => {this.props.navigation.navigate("IndexPWDs") }}
            ><Text>เข้าสู่ระบบ</Text></Button>     
           <Button
            style={{
              backgroundColor: "#444FAD",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 15}} 
            onPress={() => {this.props.navigation.navigate("RegisterPWDs") }}
            >
            <Text>ลงทะเบียน</Text>
           </Button>   			
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E4F3F5',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#444FAD',
  	fontSize:16
  },
  signupButton: {
  	color:'#444FAD',
  	fontSize:16,
  	fontWeight:'500'
  },
  welcomeImage: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    alignContent: 'center',
  },
  inputBox: {
    width:300,
    height: 30,
    backgroundColor:'#ffffff',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#444fad',
    marginVertical: 10
  },
});