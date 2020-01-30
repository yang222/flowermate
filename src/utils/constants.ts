import { User } from 'types/types';

import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export { screenHeight, screenWidth };
// export const isIphoneX = DeviceInfo.isIPhoneX_deprecated;
export const host = __DEV__ ? 'http://localhost:7001' : 'http://118.24.22.67';
// export const host = 'http://118.24.22.67';
export const apiEndpoint = `${host}/api`;

export const getImageUrl = (imageId: number) => `${apiEndpoint}/file/${imageId}`;

export const defaultAvatar = 'https://tb2.bdstatic.com/tb/static-pb/img/head_80.jpg';
export const getUserAvatar = (user: User) => ({ uri: user.avatar ? getImageUrl(user.avatar) : defaultAvatar });
