import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ToolsLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="ToolsHome" options={{ headerShown: false }} />
        <Stack.Screen name="FlashlightTool" options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: '#A8BDB4',
            title: 'Flashlight',
            headerStyle: { backgroundColor: '#161622' },
          }} />

        <Stack.Screen name="HammerTool"options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: '#A8BDB4',
            title: 'Hammer',
            headerStyle: { backgroundColor: '#161622' },
          }} />

        <Stack.Screen name="WrenchTool"
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: '#A8BDB4',
            title: 'Wrench',
            headerStyle: { backgroundColor: '#161622' },
          }} />
      </Stack>
    </>
  )
}

export default ToolsLayout

