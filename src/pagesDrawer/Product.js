import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

const Product = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Screen</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
