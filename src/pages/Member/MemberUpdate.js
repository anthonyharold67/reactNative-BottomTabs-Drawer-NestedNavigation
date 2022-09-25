import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MemberUpdate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MemberUpdate</Text>
    </View>
  );
};

export default MemberUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
