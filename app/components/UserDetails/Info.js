import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import styles from './styles';
import Row from './Row';
import { capitalizeFirstLetter } from '../../helpers/string';

const Info = ({ login, dob, location, registered }) => {
    return (
        <View style={styles.infoContainer}>
            <Row label='City' body={capitalizeFirstLetter(location.city)} />            
            <Row label='Birthday' body={moment(dob).format('MMMM Do, YYYY')} />   
            <Row label='Registered' body={moment(registered).format('MMMM Do, YYYY')} />   
            <Row label='Username' body={login.username} />
        </View>
    );
};

export default Info;
