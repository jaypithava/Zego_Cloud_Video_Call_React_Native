import {Button, View, StyleSheet} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.btnView}>
      <Button
        title="Make A Call"
        onPress={() => navigation.navigate('Callpage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
