import { ViewStyle,StyleSheet, TextStyle} from 'react-native';
import {theme} from 'styles';

const CONTAINER:ViewStyle = {
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  padding:theme.spaces.sm,
  width:'100%',
  marginBottom:theme.spaces.xs,
  backgroundColor:'white',
  borderRadius:theme.spaces.sm,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.00,

  elevation: 1,
};

const TEAMS_CONTAINER:ViewStyle = {
  flexDirection:'row',
  flex:1,
  justifyContent:'space-between',
  width:'100%',
  
};
const TEAM_WRAPPER:ViewStyle = {
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'flex-start',
  maxWidth:120,
  flexGrow:1,
 

};
const IMAGE_WRAPPER:ViewStyle = {
  flex: 1,
  padding:4,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  maxHeight:90,
  maxWidth:90,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  
  elevation: 1,

  


  marginBottom:theme.spaces.xs,
  borderRadius:theme.spaces.xs,

};
const TEAM_NAME:TextStyle = {
  textAlign:'center',
  
  
}; 
const IMAGE_OVERLAY:ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0, 0, 0, 0.4)', // Replace with the desired overlay color and opacity (0.5 in this example)
  borderRadius:theme.spaces.xs,
  
};
const GAME_INFO_WRAPPER:ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}; 
export {CONTAINER,TEAM_WRAPPER,IMAGE_WRAPPER,TEAMS_CONTAINER,IMAGE_OVERLAY,TEAM_NAME,GAME_INFO_WRAPPER};