import {Text, View, StyleSheet, Button} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Button
        title="Go Profile Screen"
        onPress={() => navigation.navigate('ProfileDetail')}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
