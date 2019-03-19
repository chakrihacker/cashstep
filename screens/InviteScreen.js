import React from "react"
import { View, Text } from "react-native"

export default class InviteScreen extends React.Component {
  static navigationOptions = {
    header: null
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
      </View>
    )
  }
}
