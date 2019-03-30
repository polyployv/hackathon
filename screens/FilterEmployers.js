import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker, Icon, Button,Text } from 'native-base';



export default class FilterEmployers extends Component {
  static navigationOptions = {
    title: 'จ้างงาน',
    headerStyle: {
      backgroundColor: "#444FAD"
    },
    headerTitleStyle: {
			color: '#FFFFFF',
		},
    
  };
  
    constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
         <Header />
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="อายุ"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="18-25" value="key0" />
                <Picker.Item label="26-30" value="key1" />
                <Picker.Item label="31-35" value="key2" />
                <Picker.Item label="36-40" value="key3" />
                <Picker.Item label="41-45" value="key4" />
                <Picker.Item label="46-50" value="key0" />
                <Picker.Item label="51-55" value="key1" />
                <Picker.Item label="56-60" value="key2" />
                
                
              </Picker>
              </Item>
              
              <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="ตำแหน่ง"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="พนักงานทั่วไป" value="key0" />
                <Picker.Item label="พนักงานบันทึกข้อมูล" value="key1" />
                <Picker.Item label="พนักงานฝ่ายธุรการ" value="key2" />
                <Picker.Item label="พนักงานชงกาแฟและครื่องดื่ม" value="key3" />
                <Picker.Item label="พนักงานบริการสนับสนุน" value="key0" />
                <Picker.Item label="ผู้ช่วยครูการศึกษาพิเศษ" value="key4" />
                <Picker.Item label="แม่บ้าน" value="key1" />
                <Picker.Item label="ประสานสิทธิบรรเทาทุกข์" value="key2" />
                <Picker.Item label="บรรณารักษ์" value="key3" />
              </Picker>
            </Item>

            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="คุณวุฒิการศึกษา"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="ระดับประถมศึกษาตอนต้น" value="key0" />
                <Picker.Item label="ระดับประถมศึกษาตอนปลาย" value="key1" />
                <Picker.Item label="ระดับมัธยมศึกษาตอนต้น" value="key2" />
                <Picker.Item label="ระดับมัธยมศึกษาตอนปลาย" value="key3" />
                <Picker.Item label="ระดับปริญญาตรี" value="key0" />
                <Picker.Item label="ระดับปริญญาโท" value="key4" />
                <Picker.Item label="ระดับปริญญาเอก" value="key1" />
                <Picker.Item label="ระดับปวช." value="key2" />
                <Picker.Item label="ระดับปวส." value="key3" />
              </Picker>
            </Item>
          </Form>
        
        <Button block success
            onPress={() => {this.props.navigation.navigate("IndexEmployers") }}>
            <Text>ค้นหา</Text>
           </Button></Content>
      </Container>
    );
  }
}