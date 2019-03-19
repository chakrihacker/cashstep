import React from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native"
import { ProgressCircle } from "react-native-svg-charts"

export default class BonusScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.bonusText}>BONUSES</Text>
        <View>
          <ProgressCircle
            style={{ height: 250 }}
            progress={0.6}
            progressColor={"#FEE74E"}
            backgroundColor={"#898989"}
          />
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.text}>CHECK-IN</Text>
            <Text style={styles.text}>STREAK</Text>
            <Text style={{ fontSize: 48, fontWeight: "bold", color: "#fff" }}>
              6
            </Text>
            <Text style={{ color: "#fff", fontSize: 20 }}>4 DAYS LEFT</Text>
          </View>
        </View>
        <Text
          style={{
            color: "#fff",
            width: "60%",
            textAlign: "center",
            alignSelf: "center",
            paddingTop: 25
          }}
        >
          Unlock <Text style={{ color: "#FEE74E" }}>100 bonus coins</Text> when
          you complete 10 daily check-ins
        </Text>
        <TouchableOpacity style={styles.checkInButton}>
          <Text>CHECK IN</Text>
        </TouchableOpacity>
        <View style={{ borderColor: "#898989", borderWidth: 1 }} />
        <View
          style={{
            alignItems: "center",
            paddingTop: 10
          }}
        >
          <Text style={{ color: "#fff", fontSize: 24 }}>BONUS HISTORY</Text>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 5
            }}
          >
            <View>
              <Text style={{ color: "#fff" }}>Check-in Streak</Text>
              <Text style={{ color: "#fff" }}>March 4</Text>
            </View>
            <Text style={{ color: "#fff" }}>+100</Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: "grey", width: "80%" }} />
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 5
            }}
          >
            <View>
              <Text style={{ color: "#fff" }}>Signup Bonus</Text>
              <Text style={{ color: "#fff" }}>March 1</Text>
            </View>
            <Text style={{ color: "#fff" }}>+100</Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: "grey", width: "80%" }} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#000"
  },
  bonusText: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 24,
    fontWeight: "bold"
  },
  text: {
    color: "#fff",
    fontSize: 20
  },
  checkInButton: {
    backgroundColor: "#fff",
    width: "30%",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 25,
    paddingVertical: 10,
    borderRadius: 25
  }
})
