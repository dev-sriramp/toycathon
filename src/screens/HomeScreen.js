import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import 'react-native-linear-gradient';
import {APP_GREY, APP_PRIMARY_COLOR, APP_WHITE} from '../util/constants';
import logo from '../assets/logos/miniature.gif';
import click from '../assets/images/click.gif'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={APP_WHITE}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.header}>
        <Animatable.Image
          animation="pulse"
          iterationCount={200000}
          source={logo}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View onStartShouldSetResponder={() =>navigation.navigate('LandScreen')}
        animation="fadeInUpBig"
        delay={1000}
        style={styles.footer}>
        <Text style={styles.title} >Welcome! Learner.{"\n"} Lets go =&gt;</Text>
		<Animatable.Image
			animation="zoomInUp"
			delay={4500}
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
  },
  img: {
    height:100,
    width:100,
	left:350,
  },
});
