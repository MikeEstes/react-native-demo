import React from 'react';
import { Platform } from 'react-native';
import { DrawerNavigator, TabNavigator } from './app/config/router';

const App = () => {
    if (Platform.OS === 'ios')
    {
        return <TabNavigator />;
    }

    return <DrawerNavigator />;
};

export default App;