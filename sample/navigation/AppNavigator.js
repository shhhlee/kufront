import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import ChatScreen from '../screens/ChatScreen';
import ChatRecordingScreen from "../screens/ChatRecordingScreen";
import MyPageScreen from "../screens/MyPageScreen";
import SettingScreen from "../screens/SettingScreen";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SetAlarmScreen from "../screens/SetAlarmScreen";
import SetAccountScreen from "../screens/SetAccountScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarInactiveTintColor: "#AAA",
        tabBarActiveTintColor: '#000',

    }}>
        <Tab.Screen 
        name="Chat" 
        component={ChatScreen} 
        options={{
            tabBarLabel:'채팅창',
            tabBarIcon:({color, size})=>(
                <MaterialCommunityIcons name="chat-processing" color={color} size={size}/>
            ),}}/>
        <Tab.Screen 
        name="ChatRecording" 
        component={ChatRecordingScreen}
        options={{
            tabBarLabel:'대화 기록',
            tabBarIcon:({color, size})=>(
                <FontAwesome name="tasks" color={color} size={size}/>
            ),}}/>
        <Tab.Screen 
        name="MyPage" 
        component={MyPageScreen}
        options={{
            tabBarLabel:'내 정보',
            tabBarIcon:({color, size})=>(
                <MaterialCommunityIcons name="account" color={color} size={size}/>
            ),}}/>
        <Tab.Screen 
        name="Setting" 
        component={SettingStack}
        options={{tabBarLabel:'설정',
            tabBarIcon:({color, size})=>(
                <FontAwesome name="cog" color={color} size={size}/>
            ),}}/>
    </Tab.Navigator>
    )

};

const SettingStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Setting1" component={SettingScreen} options={{headerShown:false}}/>
            <Stack.Screen name="MyPage1" component={MyPageScreen} />
            <Stack.Screen name="SetAlarm" component={SetAlarmScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SetAccount" component={SetAccountScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
        );
}

export default AppNavigator;