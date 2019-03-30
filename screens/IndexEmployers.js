import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class IndexEmployers extends Component {
  static navigationOptions = {
    title: 'จ้างงาน',
    headerStyle: {
      backgroundColor: "#444FAD"
    },
    headerTitleStyle: {
			color: '#FFFFFF',
		},
  }
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>ลูกหมู อู๊ดอู๊ด</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{justifyContent: "center"}}>
              <Body>
                <Image source={{uri: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/49798865_2342060959416663_7679434222834024448_o.jpg?_nc_cat=111&_nc_ht=scontent.fbkk11-1.fna&oh=26236477a463b337936ae558751cea72&oe=5D4F4131'}} style={{height: 100, width: 100, flex: 1}}/>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="person" />
                  <Text>สถานะ: รับรอง</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card>
          <CardItem onPress={() => {this.props.navigation.navigate("IndexPWDs") }}>
              <Left>
                <Body>
                  <Text>นางสาวศักดิ์ชัย กฐินเทศ</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{justifyContent: "center"}}>
              <Body>
                <Image source={{uri: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/45830647_2609704552380718_72265972966227968_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk11-1.fna&oh=0e2315132d608f4532d5d22799380819&oe=5D0F240A'}} style={{height: 100, width: 100, flex: 1}}/>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="person" />
                  <Text>สถานะ: รับรอง</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>น้องบ้อก ต้อม</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{justifyContent: "center"}}>
              <Body>
                <Image source={{uri: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/48426175_1154808738020505_6510986325552791552_n.jpg?_nc_cat=102&_nc_ht=scontent.fbkk11-1.fna&oh=ef490b59f7c7d52d468529342f76071b&oe=5D07D15D'}} style={{height: 100, width: 100, flex: 1}}/>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="person" />
                  <Text>สถานะ: ไม่รับรอง</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}