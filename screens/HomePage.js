import {Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function HomePage({navigation}) {
  const pressHandle = () => {
    navigation.navigate('MemberListPage');
  };
  return (
    <View>
      <Text style={{color: '#000'}}>Home page</Text>
      <TouchableWithoutFeedback onPress={pressHandle}>
        <Text style={{color: '#000', fontSize: 20}}>
          Jump to member list page
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
