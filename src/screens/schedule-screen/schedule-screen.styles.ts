
import {ViewStyle} from 'react-native';
import {theme} from 'styles';

const CONTAINER:ViewStyle = {
  flex:1,
  backgroundColor:'white',
  // paddingHorizontal:theme.spaces.md
};

const HEADER_CONTAINER:ViewStyle = {
  width:'100%',
  backgroundColor:theme.colors.blue[100],
  paddingHorizontal:theme.spaces.md,
  justifyContent:'center',
  alignItems:'flex-start'
};
export {CONTAINER,HEADER_CONTAINER};