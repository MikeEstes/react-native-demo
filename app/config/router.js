import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from 'app/screens/Contacts';
import Details from 'app/screens/Details';
import DrawerButton from 'app/components/Header/DrawerButton';
import NewContact from 'app/screens/NewContact';
import Me from 'app/screens/Me';

import { capitalizeFirstLetter } from 'app/helpers/string';

const LeftDrawerButton = ({ navigation }) => {
    if (Platform.OS === 'android') {
        return <DrawerButton onPress={() => navigation.openDrawer()} />;
    }

    return null;
};

export const ContactsStack = createStackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: props => ({
            title: 'Contacts',
            headerLeft: <LeftDrawerButton {...props} />
        })
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => ({
            title: `${capitalizeFirstLetter(
                navigation.state.params.name.first
            )} ${capitalizeFirstLetter(navigation.state.params.name.last)}`
        })
    }
});

export const NewContactStack = createStackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: props => ({
            title: 'New Contacts',
            headerLeft: <LeftDrawerButton {...props} />
        })
    }
});

export const MeStack = createStackNavigator({
    Me: {
        screen: Me,
        navigationOptions: props => ({
            title: 'Me',
            headerLeft: <LeftDrawerButton {...props} />
        })
    }
});

export const Tabs = createBottomTabNavigator({
    Contact: {
        screen: ContactsStack,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-list' size={35} color={tintColor} />
            )
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            tabBarLabel: 'New Contact',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-add' size={35} color={tintColor} />
            )
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-contact' size={35} color={tintColor} />
            )
        }
    }
});

export const Drawer = createDrawerNavigator({
    Contact: {
        screen: ContactsStack,
        navigationOptions: {
            drawerLabel: 'Contacts'
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            drawerLabel: 'New Contact'
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            drawerLabel: 'Me'
        }
    }
});

export const TabNavigator = createAppContainer(Tabs);
export const DrawerNavigator = createAppContainer(Drawer);
