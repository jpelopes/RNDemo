import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello { this.props.name }</Text>
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
      <View>
        {
          this.state.names.map((name, index) => <Greeting name={ name } key={ index } />)
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