import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

const ContactsStack = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details'
    }
  }
});

export default createAppContainer(ContactsStack);