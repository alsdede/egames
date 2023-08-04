import { Match } from 'types';

const  filterUpcomingEvent =(scheduleEvent: Match) => {
  if (scheduleEvent.state === 'inProgress' || scheduleEvent.state === 'completed') {
    return;
  }
  const minDate = new Date();
  const maxDate = new Date();
  minDate.setHours(minDate.getHours() - 1);
  maxDate.setDate(maxDate.getDate() + 7);
  const eventDate = new Date(scheduleEvent.startTime);

  if(eventDate.valueOf() > minDate.valueOf() && eventDate.valueOf() < maxDate.valueOf()){

    if(scheduleEvent.match === undefined) return false;
    if(scheduleEvent.match.id === undefined) return false;

    return true;
  }else{
    return false;
  }
};

export {filterUpcomingEvent};