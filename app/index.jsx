import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar';


export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <View className="w-full items-center justify-center min-h-[85px] px-4">

                <View className="relative mt-5 w-full items-center pb-20">
                    <Image
                        source={images.tools}
                        className="w-[115px] h-[70px]"
                        resizeMode='contain'

                    />
                </View>

                <View className="relative mt-5 w-full items-center pt-20">
                    <Image
                        source={images.toolbox}
                        className="max-w-[300px] w-full h-[220px]"
                        resizeMode='contain'
                    />

                    <Text className="text-3xl text-white font-psemibold pt-10">Welcome to Flashy</Text>
                    <Text className="text-lg text-white">Your{' '}
                        <Text className="text-xl text-psemibold text-green-100 text-center">useless{' '}</Text>
                        <Text>multitool app!</Text>
                    </Text>
                </View>

                <View className="w-full pt-16">
                    <CustomButton
                        title={"View My Tools"}
                        textStyles={"text-primary"}
                        handlePress={() => router.push('/ToolsHome')}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}