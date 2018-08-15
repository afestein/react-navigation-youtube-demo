/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import YouTube from "react-native-youtube"
import { createBottomTabNavigator } from "react-navigation"

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <YouTube
          apiKey="API_KEY_HERE"
          videoId="527ZQgRx8W8" // The YouTube video ID
          play={true} // control playback of video with true/false
          fullscreen={false} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => console.warn(e.error)}
          style={{ width: 300, height: 200 }}
        />
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    )
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
})

// type Props = {}
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <YouTube
//           apiKey="API_KEY_HERE"
//           videoId="527ZQgRx8W8" // The YouTube video ID
//           play={true} // control playback of video with true/false
//           fullscreen={false} // control whether the video should play in fullscreen or inline
//           loop={true} // control whether the video should loop when ended
//           onReady={e => this.setState({ isReady: true })}
//           onChangeState={e => this.setState({ status: e.state })}
//           onChangeQuality={e => this.setState({ quality: e.quality })}
//           onError={e => console.warn(e.error)}
//           style={{ width: 300, height: 200 }}
//         />
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
})
