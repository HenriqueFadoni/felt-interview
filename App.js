import React from 'react';
import { StatusBar } from 'react-native';

import SubscribeComplete from './screens/SubscribeComplete/SubscribeComplete';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#09191F" />
      <SubscribeComplete />
    </>
  );
};

export default App;
