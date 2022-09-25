import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Member = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Member</Text>
    </View>
  );
};

export default Member;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
