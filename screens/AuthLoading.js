import React, { Component } from "react"
import { Text, View, AsyncStorage, ActivityIndicator } from "react-native"

export default class AuthLoading extends Component {
  componentDidMount() {
    this.checkUserLogin()
  }

  checkUserLogin = async () => {
    let token = await AsyncStorage.getItem("token")
    this.props.navigation.navigate(token ? "Main" : "Auth")
  }
  render() {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    )
  }
}
