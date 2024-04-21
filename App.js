import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ChoiceTime from './screen/ChoiceTime';
import Home from './screen/Home';
import Pomodoro from './screen/Pomodoro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <BottomTabNavigator />
    // </NavigationContainer>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChoiceTime" component={ChoiceTime} />
      <Stack.Screen name="Timer" component={Pomodoro} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}
// function BottomTabNavigator() {
//   return (
// <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         tabBarStyle : {backgroundColor: '#1F2D5C',
//           borderRadius : 30,
//           width : '60%',
//           borderWidth : 3,
//           borderTopWidth : 3,
//           borderColor : "#FFBA18",
//           position : 'absolute',
//           bottom: '10%',
//           left: '20%', 
//           right: '20%',
//         },
//         tabBarLabelStyle:{color:'#FFFF', fontSize: 13, padding : 1},
//         headerShown: false,
//         tabBarIcon: ({ focused, color, size, }) => {
//           let iconName;
//           if (route.name === 'Accueil') {
//             iconName = 'home';
//             return <Ionicons name="home" size={24} color={'#FFBA18'} />;
//           }else if(route.name === "Session"){
//             iconName = 'settings';
//             return <Ionicons name="settings-sharp" size={24} color={'#FFBA18'} />;
//           }else if(route.name === 'Pomodoro'){
//             iconName = 'time';
//             return <Ionicons name="time" size={24} color={'#FFBA18'} />;
//           }
//         },
//       })}
//     >
      
//       <Tab.Screen name="Accueil" component={Home} />
//       <Tab.Screen name='Session' component={ChoiceTime} />
//       <Tab.Screen name='Pomodoro' component={Pomodoro} />
//       {/* Ajoute d'autres écrans de la Tab.Navigator si nécessaire */}
//     </Tab.Navigator>
    //  );
    // }