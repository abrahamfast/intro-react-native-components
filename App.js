import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet,Image, TouchableHighlight, TouchableWithoutFeedback, Text, Switch, ActivityIndicator, View, Button, Alert, SafeAreaView, Pressable, TouchableNativeFeedback } from 'react-native';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const isFalse = true;

  const onClickTo = () => Alert.alert('Button with adjusted color pressed');

  const onPressFunction = () => {
     console.log('write');
  }

  const getSee = () => console.log('get see')

  const handlePress = () => console.log('here')

  const seeFeed = () => console.dir('see native feed back')

  return (

    <SafeAreaView styles={styles.container} >
      <View >
        <Text  numberOfLines={1} onPress={handlePress}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nobis, consectetur voluptates vel est sit itaque, facere vitae cumque consequuntur cupiditate veniam officiis, totam temporibus id repellendus labore ipsam unde?
        </Text>
      <TouchableOpacity onPress={getSee}>
        <Image 
        fadeDuration={1000}
        blurRadius={10}
        source={{
          width:200,
          height: 200,
          uri: "https://via.placeholder.com/300.png"
          }} 
        />
        </TouchableOpacity>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <TouchableWithoutFeedback onPress={() => console.log('text tab')} >
          <Text>Lorem Now Here</Text>
        </TouchableWithoutFeedback>

        <Pressable onPress={onPressFunction}>
          <Text styles={styles.alert}>I'm pressable!</Text>
        </Pressable>

        <Text accessibilityHint="hello yser" style={{fontWeight: 'bold'}}>
          <Text >First part and </Text>
          <Text style={{ color: 'gray', fontSize: 20}}>second part</Text>
        </Text>

        <Button onPress={onClickTo} title="changeMe" color="#841584"/>

      <TouchableHighlight onPress={getSee} >
        <Image 
        fadeDuration={1000}
        blurRadius={10}
        source={{
          width:200,
          height: 200,
          uri: "https://via.placeholder.com/300.png"
          }} 
        />
      </TouchableHighlight>
        

    <TouchableNativeFeedback onPress={seeFeed}>
      <Image 
        fadeDuration={1000}
        blurRadius={10}
        source={{
          width:200,
          height: 200,
          uri: "https://via.placeholder.com/300.png"
          }} 
      />
      </TouchableNativeFeedback>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  alert: {
    color: "blue",
    backgroundColor: "tomato"
  }
});
