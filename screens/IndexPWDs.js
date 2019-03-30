import React from 'react';
import {
	StyleSheet,
	ScrollView,
	View,

	ImageBackground,
	Dimensions,
	Icon
} from 'react-native';
import{
	Button,
	TouchableOpacity,
	Text,
	
} from 'native-base';



export default class IndexPWDs extends React.Component {
	static navigationOptions = {
		title:  'Profile',
		
		headerStyle: {
      backgroundColor: "#444FAD"
		},
		headerTitleStyle: {
			color: '#FFFFFF',
		},
	  
	};


	
	render() {

		return (
			
				<ScrollView style={styles.container}>
					<ImageBackground  source={{uri: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/45830647_2609704552380718_72265972966227968_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk11-1.fna&oh=0e2315132d608f4532d5d22799380819&oe=5D0F240A'}} style={styles.photo}>
					</ImageBackground>
					<View style={styles.containerProfile}>
                    <Text style={styles.name}>นางสาวศักดิ์ชัย กฐินเทศ</Text>

                    <Text style={styles.description}>
                        อายุ: 31 ปีg
                    </Text>
										

                    <View style={styles.info}>
                    <Text style={styles.infoContent}>
										ที่อยู่: ตำบล บ่อโพง 
												อำเภอ นครหลวง
												จังหวัด พระนครศรีอยุธยา{"\n"}
										เบอร์โทรศัพท์ 0718334923{"\n"}
										ประเภทงาน: งานประจำ{"\n"}
										ตำแหน่ง: ติดตามประเมินผลการทำงานคนพิการ{"\n"}
										มาตรา: 35{"\n"}
										หน่วยงานที่ดูแล: สมาคมรวมใจมุ่งพัฒนาอาชีพเพื่อคนตาบอดในประเทศไทย{"\n"}
										บริษัท: KT จำกัด{"\n"}
										</Text>
										
							</View>		
                    </View>
										<Button
										
										 style={{
											backgroundColor: "#444FAD",
											alignSelf: "center",
											borderRadius: 10,
											marginTop: 2}}><Text style={{ color: "white", fontSize: 18 }}>แก้ไขข้อมูล</Text></Button>
										<Button
										onPress={() => {this.props.navigation.navigate("SubmitToReview") }}
										 style={{
											backgroundColor: "#444FAD",
											alignSelf: "center",
											borderRadius: 10,
											marginTop: 2}}><Text style={{ color: "white", fontSize: 18 }}>ส่งเอกสาร</Text></Button>
                    
										<Button
										
										 style={{
											backgroundColor: "#444FAD",
											alignSelf: "center",
											borderRadius: 10,
											marginTop: 2}}><Text style={{ color: "white", fontSize: 18 }}>ออกจากระบบ</Text></Button>
                    
				</ScrollView>
				
		
			

		);
	}
}


const styles = StyleSheet.create({
	container: 
	{ marginHorizontal: 0 },
	containerProfile:
	{
		backgroundColor: '#FFF',
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 0 }
	},
	
	bg: {
		flex: 1,
		resizeMode: 'cover',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	photo: {
		width: Dimensions.get('window').width,
		height: 300
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	topIconLeft: {

		fontSize: 20,
		color: '#FFF',
		paddingLeft: 20,
		marginTop: -20,
		transform: [{ rotate: '90deg' }]
	},
	topIconRight: {
		fontSize: 20,
		color: '#FFF',
		paddingRight: 20
	},
	actions: {
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconButton: { fontSize: 20, color: '#FFF' },
	textButton: {
		fontSize: 15,
		color: '#FFF',
		paddingLeft: 5
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#7444C0',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10
	},
	roundedButton: {
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#5636B8',
		paddingHorizontal: 20
    },
    containerItem: {
		backgroundColor: '#FFF',
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 0 }
	},
	
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: '#000000',
		fontSize: 15,
		textAlign: 'center'
	},
	description: {
		color: '#000000',
		textAlign: 'center',
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 8,
		flexDirection: 'row',
		alignItems: 'center'
	},
	icon: {
		fontSize: 12,
		color: '#363636',
		paddingHorizontal: 10
	},
	infoContent: {
		color: '#000000',
		fontSize: 14
	},
});



