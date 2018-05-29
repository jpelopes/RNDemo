import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  redGreeting: {
    color: '#f00',
  },
  background: {
    backgroundColor: 'blue',
  },
});

class Greeting extends Component {
  render() {
    return (
      <Text style={ styles.redGreeting }>Hello { this.props.name }</Text>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ['José', 'Luiz', 'Joāo'],
    };
  }

  render() {
    return (
      <View style={ styles.background }>
        {
          names.map((name, index) => <Greeting name={ name } key={ index } />)
        }
        <Button
          onPress={() => {
              this.setState(state => (
                {
                  names: state.names.concat(['Ana']),
                }
              ));
            }
          }
          title="Add Ana"
        />
      </View>
    );
  }
}