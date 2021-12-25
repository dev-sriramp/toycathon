import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  Alert,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import * as Animatable from 'react-native-animatable';
import 'react-native-linear-gradient';
import LottieView from 'lottie-react-native'
import {APP_GREY, APP_PRIMARY_COLOR, APP_WHITE,APP_NAME} from '../util/constants';
import click from '../assets/images/click.gif'

const HomeScreen = ({navigation}) => {
  const unsubscribe = () => { 
  NetInfo.addEventListener(state => {
    if(state.isConnected==true){navigation.navigate('LandScreen')}
    else{
      navigation.navigate('SplashScreen')
    }
  })};
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={APP_WHITE}
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.header}>
        <LottieView
          source={require('../assets/logos/HomeTree.json')}
          loop={true}
          autoPlay={true}
          progress={0}
          style={{ width: 450, height: 450}}
        />
        <Text style={styles.text}>{APP_NAME}</Text>
        <Text style={styles.text}>{APP_NAME}</Text>
      </View>
      <Animatable.View onStartShouldSetResponder={unsubscribe}
        animation="fadeInUpBig"
        delay={1000}
        style={styles.footer}>
        <Text style={styles.title} >Welcome! Learner.{"\n"} Lets go =&gt;</Text>
        <Animatable.Image
			animation="bounceIn"
			delay={1000}
			iterationCount={200000}
			source={click}
			style={styles.img}
			/>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_WHITE,
  },
  header: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0,
    backgroundColor: APP_PRIMARY_COLOR,
    borderTopRightRadius: 30,
    height:150,
  },
  logo: {
    height: 400,
    width: 400,
    borderRadius: 300,
  },
  title: {
    color: APP_WHITE,
    fontSize: 30,
    fontWeight: 'bold',
	alignSelf:'center',
  },
  text: {
    color: APP_GREY,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize:30,
  },
  img: {
    height:100,
    width:100,
	left:250,
  },
});
