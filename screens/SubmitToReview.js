import React, { Component } from 'react';
import { Container, Header, Content, Button, Text,Icon } from 'native-base';
export default class SubmitToReview extends Component {
  render() {
    return (
      <Container>
        <Header>
        <Text>
แนบรูปเอกสารดังนี้
</Text>
        </Header>
        
        <Content>
          <Button block light>
          <Icon name='ios-camera' style={{color:'#384850'}}/>
            <Text>สำเนาบัตรคนพิการ</Text>
          </Button>
          <Button block light>
          <Icon name='ios-camera' style={{color:'#384850'}}/>
            <Text>สำเนาบัตรประชาชน</Text>
          </Button>
          <Button block light>
          <Icon name='ios-camera' style={{color:'#384850'}}/>
            <Text>สำเนาทะเบียนบ้านชื่อคนพิการ</Text>
          </Button>
          <Button block light>
          <Icon name='ios-camera' style={{color:'#384850'}}/>
            <Text>รูปถ่ายคนพิการ</Text>
          </Button>
          <Button block light>
          <Icon name='ios-camera' style={{color:'#384850'}}/>
            <Text>วุฒิการศึกษา</Text>
          </Button>
          <Button block light>
          <Icon name='ios-camera' style={{color:'#384850'}}/>
            <Text>สปส 1 - 03</Text>
          </Button>
          <Button block light>
          <Icon name='ios-camera' style={{color:'#384850'}}/>
            <Text>หนังสือยืนยันสิทธิ์คนพิการ</Text>
          </Button>
          <Button block light>
          <Icon name='ios-camera' style={{color:'#384850'}}/>
            <Text>แบบ กกจ.พก.1 (ขึ้นทะเบียน ม.35)</Text>
          </Button>
          <Button block success>
          
            <Text>ยืนยันการส่งเอกสาร</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}