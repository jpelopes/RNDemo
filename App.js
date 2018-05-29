import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.child1} />
        <View style={styles.child2} />
        <View style={styles.child3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {

  },
  child1: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
  },
  child2: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
  },
  child3: {
    backgroundColor: 'blue',
    width: 150,
    height: 150,
  },
});
