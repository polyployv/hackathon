import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker, Icon, Button,Text } from 'native-base';
export default class FilterEmployers extends Component {
  static navigationOptions = {
    title: 'จ้างงาน',
    headerStyle: {
      backgroundColor: "#444FAD"
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
                <Picker.Item label="18" value="key0" />
                <Picker.Item label="19" value="key1" />
                <Picker.Item label="20" value="key2" />
                <Picker.Item label="21" value="key3" />
                <Picker.Item label="22" value="key4" />
                <Picker.Item label="23" value="key0" />
                <Picker.Item label="24" value="key1" />
                <Picker.Item label="25" value="key2" />
                <Picker.Item label="26" value="key3" />
                <Picker.Item label="27" value="key4" />
                <Picker.Item label="28" value="key0" />
                <Picker.Item label="29" value="key1" />
                <Picker.Item label="30" value="key2" />
                <Picker.Item label="31" value="key3" />
                <Picker.Item label="32" value="key4" />
                <Picker.Item label="33" value="key0" />
                <Picker.Item label="34" value="key1" />
                <Picker.Item label="35" value="key2" />
                <Picker.Item label="36" value="key3" />
                <Picker.Item label="37" value="key4" />
                <Picker.Item label="38" value="key0" />
                <Picker.Item label="39" value="key1" />
                <Picker.Item label="40" value="key2" />
                <Picker.Item label="41" value="key3" />
                <Picker.Item label="42" value="key4" />
              </Picker>
              </Item>
              <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="ประเภทงาน"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="งานประจำ" value="key0" />
                <Picker.Item label="งานกำกับตนเอง" value="key1" />
                
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