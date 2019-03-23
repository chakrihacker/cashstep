import React from "react"
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native"

export default class InviteScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  handleLogout = async () => {
    await AsyncStorage.removeItem("token")
    this.props.navigation.navigate("AuthLoading")
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "#000",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "#fff", fontSize: 24 }}>Coming Soon</Text>
        <TouchableOpacity onPress={this.handleLogout}>
          <Text style={{ color: "#fff", fontSize: 24 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
