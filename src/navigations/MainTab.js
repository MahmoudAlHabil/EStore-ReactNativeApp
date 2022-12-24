import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './HomeStack';
import { ProfileScreen } from '../screens';


const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#00E1B4',
            tabBarInactiveTintColor: '#AAAAAA',
        }}>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{
                tabBarLabel: "Home", tabBarLabelStyle: { fontSize: 12 },
                tabBarIcon: ({ focused, color, size }) =>
                    <Ionicons name={focused ? 'home-circle' : 'home-circle-outline'} size={size} color={color} />
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel: "Profile", tabBarLabelStyle: { fontSize: 12 },
                tabBarIcon: ({ focused, color, size }) =>
                    <Ionicons name={focused ? 'account-circle' : 'account-circle-outline'} size={size} color={color} />
            }} />
        </Tab.Navigator>
    );
}

export default MainTab;