import {  Text as TextNative,TextProps as TextPropsNative,TextStyle } from 'react-native';
import {theme} from 'styles';



type TextProps = {
    children: React.ReactNode;
    color?:  string;
    size?: 'sm' | 'md'| 'lg';
    weight?:'light' | 'medium' | 'regular' | 'semiBold' | 'bold',
    style?: TextStyle;
} & TextPropsNative

const Text = ({children,color=theme.colors.neutrals[1000],size='md',weight='medium',style,...extraProps}:TextProps) => {

  const styles:TextStyle = {
    fontSize: theme.fonts.size[size],
    color,
    fontFamily:theme.fonts.family[weight],
    textAlign:'center',

  }; 
   
  return (
    <TextNative {...extraProps} style={[styles,style]}>
      {children}
    </TextNative>);
};

export default Text;