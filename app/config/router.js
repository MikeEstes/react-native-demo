import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

const ContactsStack = createStackNavigator({
  Contacts: {
    screen: Contacts
  },
  Details: {
    screen: Details
  }
});

export default createAppContainer(ContactsStack);

/*export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts'
    }
  }
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details'
    }
  }
});*/
