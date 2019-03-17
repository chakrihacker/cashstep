import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native"

let data = Array(25).fill({ username: "username", points: 30123 })

export default class LeaderBoardScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    activeTab: "friends"
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ activeTab: "friends" })}
            style={[
              styles.buttonContainer,
              {
                backgroundColor:
                  this.state.activeTab === "friends" ? "#FEE74E" : "#000"
              }
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color: this.state.activeTab === "friends" ? "#000" : "#fff"
                }
              ]}
            >
              FRIENDS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ activeTab: "everyone" })}
            style={[
              styles.buttonContainer,
              {
                backgroundColor:
                  this.state.activeTab === "everyone" ? "#FEE74E" : "#000"
              }
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color: this.state.activeTab === "everyone" ? "#000" : "#fff"
                }
              ]}
            >
              EVERYONE
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.activeTab === "friends" ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 75
            }}
          >
            <Text style={styles.descriptionText}>
              Your friends ay already be on cashstep!
            </Text>
            <Text style={styles.descriptionText}>
              Tap below to find and compete with them on the leaderboard
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                padding: 15,
                marginTop: 20,
                borderRadius: 40
              }}
            >
              <Text style={{ color: "#000" }}>FIND FRIENDS</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: 20
                  }}
                >
                  <Text style={{ color: "#fff", paddingRight: 20 }}>
                    {index + 1}
                  </Text>
                  <Image
                    source={require("../assets/images/robot-dev.png")}
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 12.5
                    }}
                  />
                  <Text style={{ color: "#fff", paddingLeft: 20 }}>
                    {item.username}
                  </Text>
                  <View
                    style={{
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      flex: 1
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff"
                      }}
                    >
                      {item.points}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    width: "90%",
                    borderWidth: 1,
                    borderColor: "grey",
                    alignSelf: "center"
                  }}
                />
              )}
            />
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 30
  },
  buttonText: {
    color: "#000"
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    backgroundColor: "#FEE74E",
    padding: 10,
    marginTop: 10,
    borderRadius: 25,
    marginHorizontal: 10
  },
  descriptionText: {
    color: "#fff",
    textAlign: "center"
  }
})
