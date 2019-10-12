import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { contacts } from 'app/config/data';
import colors from 'app/config/colors';
import { ListItem } from 'app/components/ListItem';

class Contacts extends Component {
    handleRowPress = item => {
        this.props.navigation.navigate('Details', item);
    };

    render() {
        return (
            <FlatList
                style={{ backgroundColor: colors.background }}
                data={contacts}
                renderItem={({ item }) => (
                    <ListItem
                        contact={item}
                        onPress={() => this.handleRowPress(item)}
                    />
                )}
                keyExtractor={item => item.email}
            />
        );
    }
}
export default Contacts;
