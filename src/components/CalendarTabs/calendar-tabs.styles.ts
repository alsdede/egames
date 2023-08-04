import {ViewStyle} from 'react-native';
import {theme} from 'styles';
const CONTAINER:ViewStyle = {
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  paddingTop:16,
  paddingHorizontal:theme.spaces.sm,
  borderBottomColor:theme.colors.neutrals[500],
  borderBottomWidth:1,
  position:'relative',
  zIndex:10,
  marginBottom:16
};

const CONTAINER_DATE_TAB:ViewStyle = {
  position:'relative' ,
 
};
const CONTAINER_ACTIVE:ViewStyle = {
  position:'absolute',
  backgroundColor:theme.colors.blue[200],
  height:4,
  bottom:-2,
  width:'100%',
  zIndex:100,
  borderRadius:4,
};

export {CONTAINER,CONTAINER_DATE_TAB,CONTAINER_ACTIVE};