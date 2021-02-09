import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import 'react-native-linear-gradient';
import alphabet from '../assets/images/Alphabet.gif';
import numbers from '../assets/images/Numbers.gif';
import arithmetic from '../assets/images/Arithmetics.gif';
import { APP_SECONDARY_COLOR,APP_PRIMARY_COLOR } from '../util/constants';

const LandScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={APP_SECONDARY_COLOR}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
    <ScrollView>
    <View style={styles.container} >
        <TouchableOpacity >
          <Animatable.Image onStartShouldSetResponder={() => navigation.navigate('HomeScreen')}
            animation="pulse"
            iterationCount={200000}
            source={alphabet}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Animatable.Image onStartShouldSetResponder={() => navigation.navigate('HomeScreen')}
            animation="fadeInUpBig"
            iterationCount={1}
            de
            source={arithmetic}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Animatable.Image onStartShouldSetResponder={() => navigation.navigate('HomeScreen')}
            animation="zoomInUp"
            iterationCount={1}
            source={numbers}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Animatable.Image onStartShouldSetResponder={() => navigation.navigate('HomeScreen')}
            animation="fadeInUpBig"
            iterationCount={1}
            source={numbers}
            style={styles.logo}
          />
        </TouchableOpacity>
    </View>
      </ScrollView>
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
