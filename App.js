import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Switch, ActivityIndicator, View, Button, Alert } from 'react-native';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const isFalse = false;

  const onClickTo = () => Alert.alert('Button with adjusted color pressed');

  return (
    <View style={styles.container}>
      <ActivityIndicator  animating={isFalse}/>
      <Text>Hello 2React Native!</Text>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <Button onPress={onClickTo} title="changeMe" color="#841584"/>

      <StatusBar style="auto" />
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
