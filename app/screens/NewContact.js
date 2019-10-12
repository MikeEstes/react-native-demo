import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from 'app/config/colors';
import { TextInput } from 'app/components/TextInput';
import PrimaryButton from 'app/components/Buttons/PrimaryButton';

const fields = [
    { placeholder: 'First Name', stateKey: 'firstName' },
    { placeholder: 'Last Name', stateKey: 'lastName' },
    { placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address' },
    { placeholder: 'Cell Phone', stateKey: 'cellPhone' },
    { placeholder: 'Home Phone', stateKey: 'homePhone' },
    { placeholder: 'City', stateKey: 'city' },
    { placeholder: 'Birthday', stateKey: 'birthday' },
    { placeholder: 'Registered', stateKey: 'registered' },
    { placeholder: 'Username', stateKey: 'username' }
];

class NewContacts extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    onInputChange = (text, stateKey) => {
        const mod = {};
        mod[stateKey] = text;
        this.setState(mod);
    };

    handleSubmit = (index, override = false) => {
        if(index === fields.length - 1 || override) {
          alert('Submit');
        } else {
          const nextField = fields[index + 1];
          this[nextField.stateKey].focus();
        }
    };

    render() {
        return (
            <KeyboardAwareScrollView
                style={{ backgroundColor: colors.background }}
                enableOnAndroid={true}
            >
                {fields.map((field, index) => (
                    <TextInput
                        key={field.stateKey}
                        onChangeText={(text) => this.onInputChange(text, field.stateKey)}
                        returnKeyType={index === fields.length - 1 ? 'done' : 'next'}
                        onSubmitEditing={() => this.handleSubmit(index)}
                        ref={(input) => this[field.stateKey] = input}
                        {...field}
                    />
                ))}
                <View style={{ marginTop: 20 }}>
                    <PrimaryButton
                        label='Save'
                        onPress={() => this.handleSubmit(0, true)}
                    />
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
export default NewContacts;
