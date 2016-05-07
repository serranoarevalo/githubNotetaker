import React, {Component, PropTypes} from 'react';
import {
	View,
	StyleSheet,
	WebView
} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F6F6',
		flexDirection: 'column'
	}
})

class Web_View extends Component{
	render(){
		return(
			<View style={styles.container}>
				<WebView source={{uri: this.props.url}} />
			</View>
		)
	}
}

export default Web_View