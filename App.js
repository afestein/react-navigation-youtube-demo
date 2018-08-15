/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import YouTube from "react-native-youtube"
import { createStackNavigator } from "react-navigation"
import { Button, Platform, StyleSheet, Text, View, YellowBox } from "react-native"

class HomeScreen extends React.Component {
  componentWillMount() {
    YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated"])
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <YouTube
          apiKey="API_KEY_HERE"
          videoId="527ZQgRx8W8" // The YouTube video ID
          play={false} // control playback of video with true/false
          fullscreen={false} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          resumePlayAndroid={false} // tab switching crashes without this
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => console.warn(e.error)}
          style={{ width: 300, height: 200 }}
        />
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
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
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

export default createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
})
