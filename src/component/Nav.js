import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../style";
import HomeScreen from "../screen/HomeScreen";
import ProfileScreen from "../screen/ProfileScreen";
import NotificationScreen from "../screen/NotificationScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Nav() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#FFA301',
                showLabel: false
            }}
        >
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
export default Nav;

// function Nav({ state, descriptors, navigation }) {
//     return (
//         <View style={{ flexDirection: 'row' }}>
//             {state.routes.map((route, index) => {
//                 const { options } = descriptors[route.key];
//                 const label =
//                     options.tabBarLabel !== undefined
//                         ? options.tabBarLabel
//                         : options.title !== undefined
//                             ? options.title
//                             : route.name;

//                 const isFocused = state.index === index;

//                 const onPress = () => {
//                     const event = navigation.emit({
//                         type: 'tabPress',
//                         target: route.key,
//                     });

//                     if (!isFocused && !event.defaultPrevented) {
//                         navigation.navigate(route.name);
//                     }
//                 };

//                 const onLongPress = () => {
//                     navigation.emit({
//                         type: 'tabLongPress',
//                         target: route.key,
//                     });
//                 };

//                 return (
//                     <TouchableOpacity
//                         accessibilityRole="button"
//                         accessibilityState={isFocused ? { selected: true } : {}}
//                         accessibilityLabel={options.tabBarAccessibilityLabel}
//                         testID={options.tabBarTestID}
//                         onPress={onPress}
//                         onLongPress={onLongPress}
//                         style={{ flex: 1, height: 60, }}
//                     >
//                         <Text style={{ color: isFocused ? '#673ab7' : '#222', textAlign: 'center', lineHeight: 60 }}>
//                             {label}
//                         </Text>
//                     </TouchableOpacity>
//                 );
//             })}
//         </View>
//     );
// }
