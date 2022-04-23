import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Home } from './src/screens/Home';

function App() {
  return (
    <SafeAreaView style={style.container}>
      <Home />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
