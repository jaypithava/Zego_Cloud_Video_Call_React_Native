import React from 'react';
import ZegoUIKitPrebuiltCall, {
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {View} from 'react-native';

export default function callpage({navigation}) {

  return (
    <View style={{flex: 1}}>
      <ZegoUIKitPrebuiltCall
        appID={1607831269}
        appSign="78a019b171bdf38c0fb3acc7bb210feddff5798c508a7eb03f88d56abb98086d"
        userID={'123456'} // userID can be something like a phone number or the user id on your own user system.
        userName={'hard'}
        callID={'abc'} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            navigation.navigate('Home');
          },
          onHangUp: () => {
            navigation.navigate('home');
          },
        }}
      />
    </View>
  );
}
