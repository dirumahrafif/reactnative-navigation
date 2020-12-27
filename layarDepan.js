import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import layarSatu from './layarSatu';
import layarDua from './layarDua';
import layarTiga from './layarTiga';

const RootStack = createStackNavigator();

const Drawer = createDrawerNavigator();
const drawerDepan = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="drawerSatu" component={tabDepan}/>
            <Drawer.Screen name="drawerDua" component={layarDua}/>
        </Drawer.Navigator>
    )
}

const Tab = createBottomTabNavigator();
const tabDepan = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            scrollEnabled: true,
            activeTintColor:'#333',
            inactiveTintColor:'black',
            indicatorStyle:{
                backgrounColor:'#CCCCCC'
            },
            labelStyle:{
                fontSize:16,
                color:'black',
                paddingBottom:10
            },
            activeBackgroundColor:'white',
            inactiveBackgroundColor:'gray',
            style:{
                backgroundColor:'white'
            }
        }}>
            <Tab.Screen name="tabSatu" component={layarSatu}/>
            <Tab.Screen name="tabDua" component={layarDua}/>
        </Tab.Navigator>
    )
}
export default function layarDepan() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="Satu" component={drawerDepan}/>
                <RootStack.Screen name="Dua" component={layarDua}/>
                <RootStack.Screen name="Tiga" component={layarTiga}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
