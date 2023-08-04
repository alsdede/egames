import {useState} from 'react';
import { TouchableOpacity, View } from 'react-native';
import {Text} from 'components';
import {theme} from 'styles';

import * as S from './calendar-tabs.styles';

type DateTabProps = {
    day:string
    dayNumber:number
    isActive:boolean
    onPress:()=>void
}

const DateTab = ({day,dayNumber,isActive,onPress}:DateTabProps) => {
  
  return (
    <TouchableOpacity style={S.CONTAINER_DATE_TAB} onPress={onPress}>
      <View>
        <Text color={theme.colors.neutrals[500]}>
          {day}
        </Text>
        <Text weight='bold' size='lg'>
          {dayNumber}
        </Text>
      </View>
      {isActive && <View style={S.CONTAINER_ACTIVE}/>}
    </TouchableOpacity>
  );
};


const DATA = [
  {
    day:'Seg',
    dayNumber:1
  },
  {
    day:'Ter',
    dayNumber:2
  },
  {
    day:'Qua',
    dayNumber:3
  },
  {
    day:'Qui',
    dayNumber:4
  },
  {
    day:'Sex',
    dayNumber:5
  },
  {
    day:'Sab',
    dayNumber:6
  },
  {
    day:'Dom',
    dayNumber:7
  }

];
const CalendarTabs = () => {
  const [isActive,setIsActive] = useState('');


  return(
    <View style={S.CONTAINER}>
      {DATA.map((item) =>
        (
          <DateTab day={item.day} dayNumber={item.dayNumber} key={item.dayNumber} isActive={item.day === isActive } onPress={()=>setIsActive(item.day)}/>
        )
      )}
    </View>
  );
};
export default CalendarTabs;