import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { Actions, Header, Info } from 'app/components/UserDetails';
import colors from 'app/config/colors';
import { me } from 'app/config/data';
import PrimaryButton from 'app/components/Buttons/PrimaryButton';

class Me extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: colors.background }}>
                <Header {...me} />
                <PrimaryButton label='Edit Profile' onPress={() => null} />
                <Actions {...me} />
                <Info {...me} />
            </ScrollView>
        );
    }
}
export default Me;
