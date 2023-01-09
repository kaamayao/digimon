import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from './screens/homepage';
import Battleground from './screens/battleground';
import ChoosePokemon from './screens/choosePokemon';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen name="ChoosePokemon" component={ChoosePokemon} />
        
        <Stack.Screen name="Battleground" component={Battleground} />

      </Stack.Navigator>
    </NavigationContainer>
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
