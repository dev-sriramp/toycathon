
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import 'react-native-linear-gradient';
import alphabet from '../assets/images/Alphabet.gif';
import numbers from '../assets/images/Numbers.gif';
import arithmetic from '../assets/images/Arithmetics.gif';
import { APP_SECONDARY_COLOR,APP_PRIMARY_COLOR } from '../util/constants';

const LandScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={APP_SECONDARY_COLOR}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
    <View style={styles.container} >
        <TouchableOpacity >
      <Image
        style={styles.logo}
        source={alphabet}
      />
      <Image 
        style={styles.logo}
        source={numbers}
      />
      <Image
        style={styles.logo}
        source={arithmetic}
      />
      <Image
        style={styles.logo}
        source={numbers}
      /></TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};
export default LandScreen;
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: APP_SECONDARY_COLOR,
  },
  logo: {
    alignSelf:'center',
    width: 250,
    height: 250,
    borderWidth:5,
    borderRadius:50,
    borderColor:APP_PRIMARY_COLOR,
  }
});
