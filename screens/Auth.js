import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

export default class Auth extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff", fontSize: 24, paddingVertical: 30 }}>
          {" "}
          Authentication{" "}
        </Text>
        <TextInput
          placeholder={"Email"}
          style={{ backgroundColor: "#fff", width: "80%", padding: 10 }}
        />
        <TextInput
          placeholder={"Password"}
          style={{
            backgroundColor: "#fff",
            width: "80%",
            padding: 10,
            marginVertical: 30
          }}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Main")}
          style={{
            backgroundColor: "#fff",
            width: "40%",
            paddingVertical: 10,
            alignItems: "center",
            borderRadius: 50
          }}
        >
          <Text style={{ color: "#000", fontSize: 24 }}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#000",
    alignItems: "center"
  }
})
