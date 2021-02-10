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
import Audio from 'react-native-sound';
import {  URLS, APP_WHITE } from '../util/constants';
let audio = new Audio(URLS + "apple.mp3")

const start = () => {
    audio.play()
}
const LandScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor={APP_WHITE}
                translucent={false}
                networkActivityIndicatorVisible={true}
            />
            <ScrollView>
                <View style={styles.container} >
                    <TouchableOpacity >
                        <Animatable.Image onStartShouldSetResponder={start}
                            animation="pulse"
                            iterationCount={200000}
                            source={{
                                uri: URLS + 'apple.gif',
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
        paddingTop: 150,
        backgroundColor:APP_WHITE,
        
    },
    logo: {
        flex:10,        
        alignSelf: 'center',
        width: 300,
        height:300,
        borderWidth: 5,
        borderRadius: 50,

    }
});
