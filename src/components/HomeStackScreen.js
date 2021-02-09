import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {APP_PRIMARY_COLOR, APP_WHITE, ICON_SIZE} from '../util/constants';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: APP_PRIMARY_COLOR},
      headerTitleStyle: {
        fontWeight: 'bold',
        color: APP_WHITE,
      },
    }}>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: 'HOME',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={ICON_SIZE}
            color={APP_WHITE}
            backgroundColor={APP_PRIMARY_COLOR}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
