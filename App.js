import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ChoiceTime from './screen/ChoiceTime';
import Home from './screen/Home';
import Pomodoro from './screen/Pomodoro';
import Information from './screen/Information';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChoiceTime" component={ChoiceTime} />
      <Stack.Screen name="Timer" component={Pomodoro} />
      <Stack.Screen name="Information" component={Information} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}