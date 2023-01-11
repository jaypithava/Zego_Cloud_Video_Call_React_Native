import {Text, View, ZegoStartCallInvitationButton} from 'react-native';
import React from 'react';
import ZegoUIKitPrebuiltCall, {
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
  ONE_ON_ONE_VOICE_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';

export default function MemberListPage() {
  return (
    <View>
      <Text>Start call page</Text>
      <ZegoStartCallInvitationButton
        invitees={['the_user_id_of_invitee']}
        isVideoCall={true}
      />
    </View>
  );
}
