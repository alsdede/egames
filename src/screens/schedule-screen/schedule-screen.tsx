import { useEffect } from 'react';
import { View } from 'react-native';
import {Text} from 'components';

import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { getScheduleResponse } from 'services/api';

import {useState} from 'react';
import * as S from './schedule-screen.styles';
import { Match, Schedule } from 'types';
import { filterUpcomingEvent } from 'utils/schedule';
import GameCard from '_components/GameCard/game-card';
import CalendarTabs from '_components/CalendarTabs/calendar-tabs';


const ScheduleScreen = () => {
  const [upcomingEvent, setUpcomingEvent] = useState<Match[]>([]);
 
  useEffect(() => {
    getScheduleResponse().then(response => {
      const schedule:Schedule = response.data.data.schedule;
      setUpcomingEvent(schedule.events.filter(filterUpcomingEvent));
          
    }).catch(error =>
      console.error(error)
    );
  }, []);
  //console.log('EVENTS',upcomingEvent);
  const createNewArray = (events) => {
    return events.reduce((result, event) => {
      const leagueName = event.league.name;
  
      // Check if the leagueName is already added to the result array
      if (!result.includes(leagueName)) {
        result.push(leagueName);
      }
  
      // Add the event data to the result array
      result.push(event);
  
      return result;
    }, []);
  };
  
  const newArray = createNewArray(upcomingEvent);
  const stickyHeaderIndices = newArray
    .map((item, index) => {
      if (typeof item === 'string') {
        return index;
      } else {
        return null;
      }
    })
    .filter((item) => item !== null) as number[];


 
  return(
    <SafeAreaView style={S.CONTAINER}>
      <CalendarTabs/>

      <FlashList
      
        keyExtractor={(_,index)=> index.toString()}
        data={newArray}
        renderItem={({ item }) => {
          console.log('item',item);
          if (typeof item === 'string') {
            // Rendering header
            return (
              <View style={S.HEADER_CONTAINER}>
                <Text size='lg' weight='bold'>{item}</Text>
              </View>
            );
          } else {
            // Render item
            return <GameCard teams={item.match.teams} strategy={item.match.strategy}/>;
          }
        }}
        estimatedItemSize={200}
        stickyHeaderIndices={stickyHeaderIndices}
        getItemType={(item) => {
          // To achieve better performance, specify the type based on the item
          return typeof item === 'string' ? 'sectionHeader' : 'row';
        }}
      />
    </SafeAreaView>
  );
};


export default ScheduleScreen;