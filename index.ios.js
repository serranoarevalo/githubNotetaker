import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Main from './App/Components/Main.ios.js'

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#111111'
	}
});


class githubNotetaker extends Component {
  render() {
	return (
		<NavigatorIOS
			style={styles.container}
			initialRoute={{
				title: 'Github Notetaker',
				component: Main
			}} />
	);
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
