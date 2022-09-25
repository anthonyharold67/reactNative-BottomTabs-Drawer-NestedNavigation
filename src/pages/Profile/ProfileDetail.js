import {Text, View, StyleSheet, Button} from 'react-native';
import React from 'react';

const ProfileDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileDetail Screen</Text>
      <Button title="Go Profile Screen" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
