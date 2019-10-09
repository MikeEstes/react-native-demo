import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is placeholder text!</Text>
      <Button
        id="button1"
        title='Tap Me to Continue'
        onPress={() => button2.enabled  }
      />
      <Button
        id="button2"
        title='Tap Me to Continue'
        disabled
        onPress={() => Alert.alert('You did it!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
