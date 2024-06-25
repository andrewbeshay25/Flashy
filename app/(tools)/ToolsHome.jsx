import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import FunFacts from '../../components/FunFacts'
import ToolCard from '../../components/ToolCard'
import { images } from '../../constants'
import ToolCardsView from '../../components/ToolCardsView'
import { SafeAreaView } from 'react-native-safe-area-context'

const ToolsHome = () => {
    return (
        <SafeAreaView className="h-full w-full bg-primary">
            <ScrollView>
            <View className="px-4 py-6">
                <View className="justify-between items-start flex-row mb-6">
                    <View>
                        <Text className="font-pmedium text-base text-white">Welcome Back,</Text>
                        <Text className="text-2xl font-psemibold text-green-100">Andrew</Text>
                    </View>
                </View>

                <View className="mb-6">
                    <FunFacts />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <Text className="font-pmedium text-xl text-green-100 mb-4 px-4">Your Tools</Text>
                <ToolCardsView />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ToolsHome