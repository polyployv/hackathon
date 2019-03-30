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

export default class LoginEmployers extends React.Component {
  static navigationOptions = {
		header: null
	  };

	render() {
		return(
			<View style={styles.container}>
        
				<TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#3945FF"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#3945FF"
              ref={(input) => this.password = input}
              /> 
           <Button
            style={{
              backgroundColor: "#444FAD",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 15}} 
            onPress={() => {this.props.navigation.navigate("FilterEmployers") }}>
            <Text>เข้าสู่ระบบ</Text></Button>
           <Button 
            style={{
              backgroundColor: "#444FAD",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 15}}
            onPress={() => {this.props.navigation.navigate("RegisterEmployers") }}>
            <Text>ลงทะเบียน</Text>
           </Button>
             
		
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E0E2DB',
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