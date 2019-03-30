// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class RegisterPWDs extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: '',re_password: '', company_name: '', location: '', province: '', skype: '', fb: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, re_password, email, phone_number, company_name, location, province, skype, fb } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='ชื่อผู้ใช้'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='รหัสผ่าน'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='ยืนยันรหัสผ่าน'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('re_password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='อีเมล์'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='เบอร์โทรศัพท์'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='ชื่อบริษัท'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('company_name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='ที่อยู่'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('location', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='จังหวัด'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('province', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='skype'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('skype', val)}
        />
        <Button
          title='ยืนยันการลงทะเบียน'
          onPress={() => {this.props.navigation.navigate("IndexEmployers") }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})