
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import user from './reducers/user'
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Restriction from './screens/Restriction'

const Stack = createNativeStackNavigator();
const reducers = combineReducers({ user });
const persistConfig = { key: 'MyFood', storage };
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Restriction" component={Restriction} />
      <Stack.Screen name="Regime" component={Regime} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  </NavigationContainer>
  </PersistGate>
  </Provider>
  );
}

