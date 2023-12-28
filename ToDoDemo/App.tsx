import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Home} from './src/screens';
import {Provider} from 'react-redux';
import {store} from './src/stateManagemer/Store';
import RootNavigation from './src/navigation/RootNavigation';
import {COLORS} from './src/resources';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <RootNavigation />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
