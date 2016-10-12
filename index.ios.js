/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Button from 'apsl-react-native-button'


export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hádaj na aké čislo myslím?
        </Text>

        <TextInput
          style={styles.textinput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          keyboardType='numeric'
          autoFocus={true}
          clearTextOnFocus={true}
        />

        <Button
          style={{backgroundColor: '#239', margin: 10}}
          textStyle={{fontSize: 18, color: '#fff'}}
          onPress={() => onPress(this.state.text)}
        >
          Hádaj!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  textinput: {
    textAlign: 'center',
    padding: 5,
    height: 40,
    width: 80,
    position: 'relative',
    left: 120,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

initNewGame();

function initNewGame() {
  numberToGuess = getRandomInt(0, 100);
  numberOfTries = 0;
  console.log('numberToGuess: ', numberToGuess);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onPress(guessedNumber) {
  numberOfTries++;
  if (guessedNumber < numberToGuess) {
    alert(`myslím na väčšie čislo ako ${guessedNumber}`);
  } else if (guessedNumber > numberToGuess) {
    alert(`myslím na menšie číslo ako ${guessedNumber}`);
  } else {
    alert(`Gratulujem, uhádol si že číslo na ktoré myslím je ${numberToGuess}. Podarilo sa ti to na pokus číslo ${numberOfTries}`);
    initNewGame();
  }
}
