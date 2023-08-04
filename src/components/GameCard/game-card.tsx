import { Image, View } from 'react-native';
import {Text} from 'components';
import * as S from './game-card.styles';
import { GameCardProps } from './game-card.types';




const GameCard = ({teams,strategy}:GameCardProps) => {

  return(
    <View style={S.CONTAINER}>
      <View  style={S.TEAMS_CONTAINER}>
        <View style={S.TEAM_WRAPPER}>
          <Text>{teams[0].record?.wins} - {teams[0].record?.losses}</Text>
          <View style={S.IMAGE_WRAPPER}>
            <Image width={80} height={80} source={{uri:teams[0].image}} resizeMode="cover"/>
          </View>
          <Text style={S.TEAM_NAME} numberOfLines={2} ellipsizeMode="tail" >{teams[0].name}</Text>
       
        </View>
        <View style={S.GAME_INFO_WRAPPER}>
          <Text>BEST OF {strategy.count}</Text>
          <Text>VS</Text>
          <Text>{`${teams[0].result?.gameWins}-${teams[1].result?.gameWins}`}</Text>
        </View>
        <View style={S.TEAM_WRAPPER}>
          <Text>{teams[1].record?.wins} - {teams[1].record?.losses}</Text>
          <View style={S.IMAGE_WRAPPER}>
            <Image width={80} height={80} source={{uri:teams[1].image}} resizeMode="cover"/>
          
          </View>
         
          <Text>{teams[1].name}</Text>
     
        </View>
      </View>
     
    </View>
  );
};


export default GameCard;