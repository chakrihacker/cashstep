import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  ActivityIndicator
} from "react-native"

export default class Auth extends Component {
  state = {
    isLogin: true,
    username: "",
    email: "",
    password: "",
    isError: false,
    errorMessage: "",
    isLoading: false
  }

  handleSubmit = async () => {
    if (this.state.isLogin) {
      // Login User
      if (this.state.username.length === 0) {
        this.setState({ isError: true, errorMessage: "Please enter username" })
        return
      }
      if (this.state.password.length === 0) {
        this.setState({ isError: true, errorMessage: "Please enter password" })
        return
      }
      this.setState({ isLoading: true })
      this.handleLogin()
    } else {
      // Create User
      if (this.state.username.length === 0) {
        this.setState({ isError: true, errorMessage: "Please enter username" })
        return
      }
      if (this.state.email.length === 0) {
        this.setState({ isError: true, errorMessage: "Please enter email" })
        return
      }
      if (this.state.password.length === 0) {
        this.setState({ isError: true, errorMessage: "Please enter password" })
        return
      }
      this.setState({ isLoading: true })
      let createUser = await fetch(
        "https://pacific-ocean-39196.herokuapp.com/users/register",
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            firstName: "Subramanya",
            lastName: "Chakravarthy"
          })
        }
      )
      let resp = await createUser.json()
      if (resp.success === 1) {
        this.handleLogin()
      } else {
        Alert.alert("Error", "Failed to create User")
      }
      console.log(resp)
    }
  }

  handleLogin = async () => {
    let tokenResp = await fetch(
      "https://pacific-ocean-39196.herokuapp.com/users/authenticate",
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }
    )

    let tokenObj = await tokenResp.json()
    await AsyncStorage.setItem("token", tokenObj.token)
    this.props.navigation.navigate("Main")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff", fontSize: 24, paddingVertical: 30 }}>
          {" "}
          Authentication{" "}
        </Text>
        <TextInput
          ref={input => (this.usernameRef = input)}
          placeholder={"User Name"}
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
          style={{
            backgroundColor: "#fff",
            width: "80%",
            padding: 10,
            marginBottom: 25
          }}
        />
        {!this.state.isLogin && (
          <TextInput
            ref={input => (this.emailRef = input)}
            placeholder={"Email"}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            style={{
              backgroundColor: "#fff",
              width: "80%",
              padding: 10,
              marginBottom: 25
              // marginVertical: 30
            }}
          />
        )}
        <TextInput
          ref={input => (this.passwordRef = input)}
          placeholder={"Password"}
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry={true}
          style={{
            backgroundColor: "#fff",
            width: "80%",
            padding: 10,
            marginBottom: 30
          }}
        />
        <TouchableOpacity
          onPress={this.handleSubmit}
          style={{
            backgroundColor: "#fff",
            width: "40%",
            paddingVertical: 10,
            alignItems: "center",
            borderRadius: 50,
            marginBottom: 20
          }}
        >
          <Text style={{ color: "#000", fontSize: 24 }}>Submit</Text>
        </TouchableOpacity>
        {this.state.isLoading && <ActivityIndicator size={"large"} />}
        <View
          style={{
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 50,
            flexDirection: "row",
            margin: 10,
            borderRadius: 50
          }}
        >
          <TouchableOpacity
            onPress={() => this.setState({ isLogin: true })}
            style={{
              padding: 10,
              backgroundColor: this.state.isLogin ? "#FEE74E" : "#fff",
              borderRadius: 25
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "#000"
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ isLogin: false })}
            style={{
              padding: 10,
              backgroundColor: !this.state.isLogin ? "#FEE74E" : "#fff",
              borderRadius: 25
            }}
          >
            <Text style={{ fontSize: 24 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
