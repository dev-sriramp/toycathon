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
import { APP_SECONDARY_COLOR,APP_PRIMARY_COLOR ,URLS} from '../util/constants';
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
              source={{
                uri: URLS+'Alphabet.gif',
              }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Animatable.Image onStartShouldSetResponder={() => navigation.navigate('HomeScreen')}
            animation="fadeInUpBig"
            iterationCount={1}
            de
              source={{
                uri: URLS + 'Number.gif',
              }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Animatable.Image onStartShouldSetResponder={() => navigation.navigate('HomeScreen')}
            animation="zoomInUp"
            iterationCount={1}
              source={{
                uri: URLS + 'Arithmetic.gif',
              }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Animatable.Image onStartShouldSetResponder={() => navigation.navigate('SoundScreen')}
            animation="fadeInUpBig"
            iterationCount={1}
              source={{
                uri: URLS + 'Alphabet.gif',
              }}
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
