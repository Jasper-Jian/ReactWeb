import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Navigator,
} from 'react-native';

import defaultContactUs from '../Contact_us/defaultContactUs';

export default class ContactUs extends Component{
  render(){
    let defaultName = 'defaultContactUs';
    let defaultComponent = defaultContactUs;

    return(
      <Navigator
          initialRoute = {{name: defaultName, component: defaultComponent}}
          configureScene = {(route) => {
            return Navigator.SceneConfigs.FloatFromRight;}}
          renderScene = {(route, navigator) =>{
            let Component = route.component;
            return <Component{...route.params} navigator = {navigator} />}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#F5FCFF',
  },
  headImage: {
    width:Dimensions.get('window').width,
    height:200,
    resizeMode: 'stretch'
  },
});
