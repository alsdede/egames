import { useFonts, Poppins_300Light,Poppins_400Regular,Poppins_500Medium,Poppins_600SemiBold,Poppins_700Bold } from '@expo-google-fonts/poppins';
import { AppNavigator } from 'navigation';



export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,Poppins_400Regular,Poppins_500Medium,Poppins_600SemiBold,Poppins_700Bold 
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AppNavigator/>
  );
}

