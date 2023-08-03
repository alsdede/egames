
import {useEffect} from 'react';
import { View } from 'react-native';
import {Text} from 'components';
import * as S from './home-screen.styles';
import { getScheduleResponse } from 'services/api';


const HomeScreen = () => {

  useEffect(() => {
    getScheduleResponse().then(response => {
      const schedule = response.data.data.schedule;
 
      console.log(schedule.events);

         
    }).catch(error =>
      console.error(error)
    );
  }, []);

  return(
    <View style={S.CONTAINER}>
      <Text weight="bold">HOME SCREEN</Text>
    </View>
  );
};


export default HomeScreen;