import {Home, ScanSetup, Settings, Subscription} from '../screens';
import {Text, Platform, View, Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ICONS, FONTS, COLORS} from '../resources';
import CustomHeader from '../components/CustomHeader';
import Profile from '../screens/profile/Profile';

// Thanks for watching
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#fff',
  },
};
export default function CustomBottomTab() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          header: () => <CustomHeader />,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
            paddingTop: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      top: -10,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={ICONS.HOME_ICON}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Setup"
          component={ScanSetup}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      top: -10,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={ICONS.BOTTOM_SCAN_ICON}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Scan"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    //   backgroundColor: '#16247d',
                    //   width: Platform.OS == 'ios' ? 50 : 60,
                    //   height: Platform.OS == 'ios' ? 50 : 60,
                    top: Platform.OS == 'ios' ? -25 : -35,
                    borderRadius: Platform.OS == 'ios' ? 25 : 30,
                  }}>
                  <Image
                    style={{
                      width: Platform.OS == 'ios' ? 70 : 80,
                      height: Platform.OS == 'ios' ? 70 : 80,
                    }}
                    source={ICONS.BOTTOM_QR_ICON}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Subscription"
          component={Subscription}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 25,
                      top: -10,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={ICONS.BAG_ICON}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 25,
                      top: -10,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={ICONS.BOTTOM_PROFILE_ICON}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.primaryLight}
        translucent={true}
      />
    </View>
  );
}
