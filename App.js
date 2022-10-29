import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav from "./src/component/Nav";

export default function App() {
    return (
        <NavigationContainer>
            <Nav />
        </NavigationContainer>
    );
}


// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
//                 <Tab.Screen name="Notification" component={NotificationScreen} />
//                 <Tab.Screen name="Home" component={HomeScreen} />
//                 <Tab.Screen name="Profile" component={ProfileScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }


