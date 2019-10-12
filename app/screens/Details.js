import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { Actions, Header, Info } from 'app/components/UserDetails';
import colors from 'app/config/colors';

class Details extends Component {
    render() {
        const contact = this.props.navigation.state.params;

        return (
            <ScrollView style={{ backgroundColor: colors.background }}>
                <Header {...contact} />
                <Actions {...contact} />
                <Info {...contact} />
            </ScrollView>
        );
    }
}
export default Details;
