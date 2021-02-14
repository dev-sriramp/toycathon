import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Audio from 'react-native-sound';
import { URLS, APP_WHITE, APP_PRIMARY_COLOR, APP_GREY } from '../util/constants';
import { Alert } from 'react-native';

const SoundScreen = ({ navigation }) => {
    //var audio = new Audio(URLS + "apple.mp3")
    const [index, setIndex] = React.useState(0);
    var aud = ["apple.mp3", "Orange.mp3", "Orange.mp3"];
    var SampleNameArray = ["apple.gif", "Alphabet.gif", "Alphabet.gif"];
    var result = aud.length;
    var audio = new Audio(URLS + aud[index]);
    const inde = () => {
        audio.stop()
        setIndex(index - 1)
    }
    const inder = () => {
        audio.stop()
        setIndex(index + 1)
    }
    const start = () => {
        audio.play()
    }
    if (index == 0) {
        result = 10;
        var valueInitial = 'none';
    } else {
        var valueInitial = 'flex';
    }
    if (index == result - 1) {
        var valueFinal = 'none';
    } else {
        var valueFinal = 'flex';
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor={APP_WHITE}
                translucent={false}
                networkActivityIndicatorVisible={true}
            />
            <View style={styles.body} >
                <TouchableOpacity >
                    <Animatable.Image onStartShouldSetResponder={start}
                        animation="pulse"
                        iterationCount={200000}
                        source={{
                            uri: URLS + SampleNameArray[index],
                        }}
                        style={styles.logo}
                    />
                </TouchableOpacity>
            </View>
            <Animatable.View style={styles.button}
                animation="pulse"
                iterationCount={200000}>
                <TouchableOpacity style={{ display: valueInitial, width: 250, fontSize: 20 }}>
                    <Button titleStyle={{ fontSize: 60, borderRadius: 50, }} buttonStyle={{ borderTopRightRadius: 30, }} onPress={inde}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{
                            colors: ['red', 'red'],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        title="Back" /></TouchableOpacity>
                <TouchableOpacity style={{ display: valueFinal, width: 250, fontSize: 20}}>
                    <Button titleStyle={{ fontSize: 60,  }} buttonStyle={{borderTopLeftRadius: 30,}} onPress={inder}
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['green', 'green'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                    }} title="Next"/></TouchableOpacity>
            </Animatable.View>
        </SafeAreaView>
    );
};
export default SoundScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_WHITE,
    },
    body: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        height: 100,
        //backgroundColor: APP_PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 30,
    },
    logo: {
        height: 400,
        width: 400,
    },
    title: {
        color: APP_WHITE,
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    text: {
        color: APP_GREY,
        marginTop: 5,
        fontWeight: 'bold',
    },
    img: {
        height: 100,
        width: 100,
        left: 350,
    },
});
