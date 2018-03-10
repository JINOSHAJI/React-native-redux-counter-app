import React from 'react';
import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import App from './App';
import Counter from './Counter';
// import configureStore from './src/store/configureStore';

// const store = configureStore();

// const ReduxDemo = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

AppRegistry.registerComponent('sampleredux', () => Counter);
