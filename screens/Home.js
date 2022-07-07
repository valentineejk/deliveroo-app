import { useNavigation } from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native';
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from "react-native-heroicons/outline";
import Category from '../components/Category';
import Features from '../components/Features';




const Home = () => {

const navigation = useNavigation();

useLayoutEffect(() => {
 navigation.setOptions({
    headerShown: false,
 })
   
},[])


    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
              <Image
              source={{uri: 'https://links.papareact.com/wru'}}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            /> 

    {/* Texts */}
    <View className="flex-1">
    <Text className=" font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
        </Text>
    </View>
    <UserIcon size={35} color="#00CCBB" />
    </View>
          {/* Search */}
          <View className=" flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
    <SearchIcon color="gray" size={20}/>
    <TextInput placeholder='Search..'
        keyboardType='default'
            />
            </View>
            <AdjustmentsIcon color="#00CCBB"/>
          </View>
          {/* content */}
          <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{
paddingBottom: 100,
          }}
          >
            {/* cat */}
            <Category/>
            {/* fea */}
            <Features/>
          </ScrollView>
        </SafeAreaView>
    );
}


export default Home;

