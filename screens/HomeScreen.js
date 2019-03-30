import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  AsyncStorage,

} from 'react-native';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { geocodeAsync } from 'expo-location';
import {Button,Text} from 'native-base';

export default class Home extends React.Component {
  static navigationOptions = {
		header: null
	  };
    render() {
    return(  
      <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')}
              style={styles.welcomeImage}
            />     
            <View style={styles.button}>
             <Button
             style={{
              backgroundColor: "#FF3879",
              alignSelf: "flex-end",
              borderRadius: 10,
              marginTop: 15}}
              ><Text style={{ color: "white", fontSize: 18 }}> ผู้พิการ </Text></Button>
               <Button
             style={{
              backgroundColor: "#FF3879",
              alignSelf: "flex-end",
              borderRadius: 10,
              marginTop: 15}} 
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
    height: 200,
    resizeMode: 'contain',
    alignContent: 'center',
  },
  button:{
    paddingTop: 60,
  }
});
