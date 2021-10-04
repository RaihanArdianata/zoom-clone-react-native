import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Home from '../screens/Home'
import MeetingRoom from '../screens/MeetingRoom'

export default function Navigation() {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Room"
                    component={MeetingRoom}
                    options={{
                        title: "Start a Meeting",
                        headerStyle:{
                            backgroundColor: "#1c1c1c",
                            shadowOpacity: 0,
                        },
                        headerTintColor: "#ffffff"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
