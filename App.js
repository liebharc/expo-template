import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NativeModules } from 'react-native';

import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>	
	  <Text>{NativeModules.ExpoRandom !== null ? 'Random' : 'No random'}</Text>
			<Text>
				{NativeModules.RandomModule !== null ? 'Random' : 'No random'}
			</Text>
			<Text>{Object.keys(NativeModules).join(', ')}</Text>
			<Text>{Constants.systemFonts}</Text>
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
