import React from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
	Button
} from 'react-native';




export default class IndexPWDs extends React.Component {
	static navigationOptions = {
		title:  'Profile',
		headerStyle: {
			backgroundColor: '#ffe3e3',
		},
		headerTitleStyle: {
			color: '#444FAD',
		},
	  
	};


	
	render() {

		return (
			
				<ScrollView style={styles.container}>
					<ImageBackground  source={require('../assets/images/profile.jpg')}style={styles.photo}>
					</ImageBackground>
                    <View style={styles.containerItem}>
                    <Text style={styles.name}>name</Text>

                    <Text style={styles.description}>
                        age - location
                    </Text>

                    <View style={styles.info}>
     
                    <Text style={styles.infoContent}>info</Text>
                    </View>
                    </View>
				</ScrollView>
				
		
			

		);
	}
}


const styles = StyleSheet.create({
	container: 
	{ marginHorizontal: 0 },
	
	bg: {
		flex: 1,
		resizeMode: 'cover',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	photo: {
		width: Dimensions.get('window').width,
		height: 450
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
	matches: {
		width: 131,
		marginTop: -15,
		backgroundColor: '#7444C0',
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: 'center',
		alignSelf: 'center'
	},
	matchesText: {
		color: '#FFF'
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: '#363636',
		fontSize: 15,
		textAlign: 'center'
	},
	description: {
		color: '#757E90',
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
		color: '#757E90',
		fontSize: 13
	},
});



