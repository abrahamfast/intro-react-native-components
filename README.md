# intro-react-native-components

> 01 setup env

- vscode
- nodejs
- npm
- expo cli

> 02 run in ios and android

- run `expo start`
- open expo developer tools `http://localhost:19002`
- run ios emulator and avd android
- click on run ios or android in left side of page

Update the `App.js` file as shown below and see the changes in the emulator

```js
<View style={styles.container}>
  <Text>Hello React Native!</Text>
  <StatusBar style="auto" />
</View>
```

> 03 Debugging In Packager

run in ios simulator, press on `command + d` then select debugging mode. automaticly open google developer mode.
you can uses vscode debugg mode

- install react native mode
- create new config

like this

```json
  "configurations": [
    {
      "name": "Attach to packager",
      "request": "attach",
      "type": "reactnative",
      "cwd": "${workspaceFolder}"
    }
  ]
```

`Notice`:

- check packager is running `http://localhost:19000/status`
- close google developer mode `http://localhost:19000/debugger-ui/`

now you can set breackpoint in own code. let show you in `App.js`

> 04 core components and apis
> Provides a number of built in Core Components ready to use.

[See more details](https://reactnative.dev/docs/components-and-apis)

here example

```html
<View>
  <ActivityIndicator />
  <button onPress></button>
  <Text>Hello 2React Native!</Text>
  <Switch ios_backgroundColor="#3e3e3e" />
  <input style.input onChangeText="{onChangeText}" />
  <Image sourc={require('source')}>
</View>
```
