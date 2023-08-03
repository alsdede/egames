import {NavigationContainer} from '@react-navigation/native';
import RootStack from './root.stack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
};

export default AppNavigator;