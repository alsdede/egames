import { HOME,SCHEDULE } from 'constants/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen,ScheduleScreen} from 'screens';


const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown:false
        }}
        name={HOME}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown:false
        }}
        name={SCHEDULE}
        component={ScheduleScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;