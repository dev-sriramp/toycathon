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
import {APP_GREY, APP_PRIMARY_COLOR, APP_WHITE} from '../util/constants';
import logo from '../assets/logos/miniature.gif';

const Home = ({navigation}) => {
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
        <Image source={logo} style={styles.logo} resizeMode="stretch" />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        delay={1000}
        style={styles.footer}>
        <Text style={styles.title}>Welcome! Learner. Lets go =&gt;</Text>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Home;

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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
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
  },
  text: {
    color: APP_GREY,
    marginTop: 5,
    fontWeight: 'bold',
  },
});
