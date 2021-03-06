import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  AsyncStorage,
  TouchableOpacity,

} from 'react-native';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { geocodeAsync } from 'expo-location';
import {Button,Text} from 'native-base';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
		header: null
	  };
    render() {
    return(  
      <View style={styles.container}>
            <Image 
            style={{alignSelf: "center",}}
            source={require('../assets/images/logo.png')}
              style={styles.welcomeImage}
            />     
            <View style={styles.button}>
             <Button
             style={{
              backgroundColor: "#444FAD",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 10}}
             onPress={() => {this.props.navigation.navigate("LoginPWDs") }}
              ><Text style={{ color: "white", fontSize: 18 }}> ผู้พิการ </Text></Button>
              <Button 
             style={{
              backgroundColor: "#444FAD",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 10}}
              onPress={() => {this.props.navigation.navigate("LoginEmployers") }} 
              ><Text style={{ color: "white", fontSize: 18 }}> บริษัท </Text></Button>
             

            </View>      
      </View>    
    );
  }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems:'center',
    paddingTop: 100,
  }, 
  welcomeImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignContent: 'center',
  },
  button:{
    paddingTop: 60,
  }
});
