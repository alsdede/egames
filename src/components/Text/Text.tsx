import { Text as TextNative,TextProps as TextPropsNative,TextStyle } from "react-native"
import { getFontSize } from "./Text.handler"
import {theme} from "styles"



type TextProps = {
    children: React.ReactNode;
    color?:  string;
    size?: "sm" | "md"| "lg";
    weight?:"light" | "medium" | "regular" | "semiBold" | "bold"
} & TextPropsNative

const Text = ({children,color=theme.colors.neutrals[1000],size="md",weight="medium",...extraProps}:TextProps) => {

    const styles:TextStyle = {
        fontSize: theme.fonts.size[size],
        color,
        fontFamily:theme.fonts.family[weight]

    } 
    console.log("styles", styles)
    return (
    <TextNative {...extraProps} style={styles}>
        {children}
    </TextNative>)
}

export default Text