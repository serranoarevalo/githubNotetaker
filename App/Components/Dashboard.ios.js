import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	ActivityIndicatorIOS
} from 'react-native'

var styles = StyleSheet.create({
	container: {
		marginTop: 65,
		flex: 1
	},
	image: {
		height:350
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		alignSelf: 'center'
	}
})


class Dashboard extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Text> This is the dashboard </Text>
			</View>
		)
	}
}

export default Dashboard