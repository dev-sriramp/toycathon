import {Platform, Dimensions} from 'react-native';

const constants = {
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width,
  PLATFORM: Platform.OS,
};

export default constants;

export const HEIGHT = constants.HEIGHT;
export const WIDTH = constants.WIDTH;
export const PLATFORM = constants.PLATFORM;


export const APP_PRIMARY_COLOR = '#1C5092';
export const APP_SECONDARY_COLOR = '#1B924B';
export const APP_WHITE = '#FFFFFF';
export const APP_BLACK = '#000000';
export const APP_GREY = '#334B51';
export const ICON_SIZE = 30;
export const URLS = "https://raw.githubusercontent.com/uniqueredhat/source/main/";
