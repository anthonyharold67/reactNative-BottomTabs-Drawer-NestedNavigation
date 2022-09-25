import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Product from './pagesDrawer/Product';
// import Profile from './pagesDrawer/Profile';
// import Product from './pagesTab/Product';
// import Profile from './pagesTab/Profile';
import Profile from './pages/Profile/Profile';
import ProfileDetail from './pages/Profile/ProfileDetail';
import Member from './pages/Member/Member';
import MemberDetail from './pages/Member/MemberDetail';
import MemberUpdate from './pages/Member/MemberUpdate';

//drawer navigation
/* const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Product">
        <Drawer.Screen
          name="Product"
          component={Product}
          // options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          // options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} */

//tab navigation
/* const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#e91e63'}}>
        <Tab.Screen
          name="Product"
          component={Product}
          // options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          // options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
} */
//nested navigation
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MemberDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MemberScreen"
        component={Member}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MemberUpdate"
        component={MemberUpdate}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MemberDetail"
        component={MemberDetail}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#e91e63'}}>
        <Tab.Screen name="Member" component={MemberDrawer} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
