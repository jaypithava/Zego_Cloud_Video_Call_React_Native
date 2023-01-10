import {Button, View} from 'react-native';
import React from 'react';

const home = ({navigation}) => {
  return (
    <View>
      <Button
        title="MAke A Call"
        onPress={() => navigation.navigate('Callpage')}
      />
    </View>
  );
};

export default home;
