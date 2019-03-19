import React from "react"
import { Platform } from "react-native"
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation"

import TabBarIcon from "../components/TabBarIcon"
import Steps from "../screens/Steps"
import BonusScreen from "../screens/BonusScreen"
import InviteScreen from "../screens/InviteScreen"
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

const BonusStack = createStackNavigator({
  Bonus: BonusScreen
})

BonusStack.navigationOptions = {
  tabBarLabel: "Bonus",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-gift" : "md-gift"}
    />
  )
}

const InviteStack = createStackNavigator({
  Invite: InviteScreen
})

InviteStack.navigationOptions = {
  tabBarLabel: "Invite",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person-add" : "md-person-add"}
    />
  )
}

export default createBottomTabNavigator(
  {
    StepsStack,
    LeaderBoardStack,
    BonusStack,
    InviteStack
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
