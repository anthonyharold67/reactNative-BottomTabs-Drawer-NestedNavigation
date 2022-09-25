import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MemberDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MemberDetail</Text>
    </View>
  );
};

export default MemberDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
