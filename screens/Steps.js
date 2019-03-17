import React from "react"
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import { Icon } from "expo"
import {
  VictoryBar,
  VictoryChart,
  VictoryTooltip,
  VictoryAxis
} from "victory-native"
import { ProgressCircle } from "react-native-svg-charts"

export default class Steps extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const data = [
      { steps: 6745, day: "THU" },
      { steps: 4585, day: "FRI" },
      { steps: 3895, day: "SAT" },
      { steps: 4635, day: "SUN" },
      { steps: 5535, day: "MON" },
      { steps: 1785, day: "TUE" },
      { steps: 3245, day: "WED" }
    ]

    const axesSvg = { fontSize: 10, fill: "grey" }
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.coinsContainer}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 10,
                marginTop: 5
              }}
            >
              <Icon.MaterialCommunityIcons
                name={"hexagon"}
                color={"#FEE74E"}
                size={24}
              />
              <Text
                style={{
                  flex: 1,
                  position: "absolute",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingRight: 10
                }}
              >
                C
              </Text>
            </View>
            <Text style={styles.coinsText}>6,430</Text>
          </View>
          <View style={styles.circleContainer}>
            <ProgressCircle
              style={{ height: 300 }}
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
              <Text style={styles.stepsText}>STEPS TODAY</Text>
              <Text style={styles.stepsCount}>5,483</Text>
              <Text style={styles.goalText}>GOAL 10,000</Text>
              <TouchableOpacity style={styles.convertStepsContainer}>
                <Text style={styles.convertStepsText}>CONVERT STEPS</Text>
              </TouchableOpacity>
              <Text style={styles.expiresText}>EXPIRES IN 04:21</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingHorizontal: 65,
              paddingVertical: 40
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.titleText}>130</Text>
              <Text style={styles.fadedText}>KCAL</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.titleText}>1.4</Text>
              <Text style={styles.fadedText}>MILES</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.titleText}>72</Text>
              <Text style={styles.fadedText}>MINS</Text>
            </View>
          </View>
          <VictoryChart domainPadding={{ x: 0, y: [0, 20] }}>
            <VictoryAxis
              orientation={"top"}
              offsetY={40}
              style={{
                // axis: { stroke: "#fff" },
                tickLabels: { fill: "#898989" }
              }}
              domainPadding={10}
            />
            <VictoryAxis
              dependentAxis
              style={{
                // axis: { stroke: "#fff" },
                tickLabels: { fill: "#898989" },
                grid: { stroke: "#898989" }
              }}
            />
            <VictoryBar
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              data={data}
              labels={d => d.steps}
              labelComponent={<VictoryTooltip />}
              x={"day"}
              y={"steps"}
              style={{ data: { fill: "#FEE74E" } }}
            />
          </VictoryChart>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313"
  },
  contentContainer: {
    paddingTop: 30
  },
  coinsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  coinsText: {
    color: "#FDFDFD",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20
  },
  circleContainer: {},
  stepsText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 25
  },
  stepsCount: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 46
  },
  goalText: {
    color: "#898989",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 25,
    marginTop: 5
  },
  convertStepsContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
    marginBottom: 5
  },
  convertStepsText: {
    color: "#000",
    fontSize: 14
  },
  expiresText: {
    color: "#fff",
    marginTop: 3,
    fontSize: 12,
    fontWeight: "bold"
  },
  titleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24
  },
  fadedText: {
    color: "#898989"
  }
})
