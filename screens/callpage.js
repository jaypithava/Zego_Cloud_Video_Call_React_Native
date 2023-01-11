import React from 'react';
import ZegoUIKitPrebuiltCall, {
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {View} from 'react-native';

export default function callpage({navigation}) {

  return (
    <View style={{flex: 1}}>
      <ZegoUIKitPrebuiltCall
        appID={''}
        appSign={''}
        userID={''} // userID can be something like a phone number or the user id on your own user system.
        userName={''}
        callID={''} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            navigation.navigate('HomePage');
          },
          turnOnMicrophoneWhenJoining: false,
          onHangUp: () => {
            navigation.navigate('home');
          },
          hangUpConfirmInfo: {
            title: 'Hangup confirm',
            message: 'Do you want to hangup?',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Confirm',
          },
        }}
      />
    </View>
  );
}
