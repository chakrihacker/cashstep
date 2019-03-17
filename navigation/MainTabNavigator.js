import React from "react"
import { Platform } from "react-native"
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation"

import TabBarIcon from "../components/TabBarIcon"
import Steps from "../screens/Steps"
import EarnCoinsScreen from "../screens/EarnCoinsScreen"
import SettingsScreen from "../screens/RedeemScreen"
import LeaderBoardScreen from "../screens/LeaderBoardScreen"

const StepsStack = createStackNavigator({
  Steps: Steps
})

StepsStack.navigationOptions = {
  tabBarLabel: "Steps",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-flame` : "md-flame"}
    />
  )
}

const LeaderBoardStack = createStackNavigator({
  LeaderBoard: LeaderBoardScreen
})

LeaderBoardStack.navigationOptions = {
  tabBarLabel: "Leaderboard",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-trophy" : "md-trophy"}
    />
  )
}

const EarnCoinsStack = createStackNavigator({
  EarnCoins: EarnCoinsScreen
})

EarnCoinsStack.navigationOptions = {
  tabBarLabel: "Earn Coins",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cash" : "md-cash"}
    />
  )
}

const RedeemStack = createStackNavigator({
  Redeem: SettingsScreen
})

RedeemStack.navigationOptions = {
  tabBarLabel: "Redeem",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-wallet" : "md-wallet"}
    />
  )
}

export default createBottomTabNavigator(
  {
    StepsStack,
    LeaderBoardStack,
    EarnCoinsStack,
    RedeemStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#0E0E0E"
      },
      labelStyle: {
        color: "#fff"
      }
    }
  }
)
