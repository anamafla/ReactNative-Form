
import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';


export default class App extends Component{

  state = { username: '', password: '', formData: ''}

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  submit = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
      signedIn: true
    }

    this.setState( { formData: JSON.stringify(userData)})


  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Form Demo</Text>
        <TextInput
          placeholder='Username'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={val => this.onChangeText('username', val)}
          style={styles.input} 
        />
        <TextInput
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={val => this.onChangeText('password', val)}
          onChangeText={this.onChangeText}
          style={styles.input} 
          secureTextEntry={true}
        />

        <Button onPress={this.submit} title="Submit" />
        <Text>{this.state.formData}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {padding: 8, margin: 10, height: 50, borderWidth: 1, borderColor: '#666'},
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 30,
  }
});
