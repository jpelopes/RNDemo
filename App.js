import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const names = ['José', 'Luiz', 'Joāo'];

class Greeting extends Component {
  render() {
    return (
      <Text>Hello { this.props.name }</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        {
          names.map((name, index) => <Greeting name={ name } key={ index } />)
        }
        <Button
          onPress={() => { names.push('Ana') }}
          title="Add Ana"
        />
      </View>
    );
  }
}
