import { View } from "react-native"
import {Text} from "components"
import * as S from "./home-screen.styles"


const HomeScreen = () => {
    return(
        <View style={S.CONTAINER}>
            <Text weight="bold">HOME SCREEN</Text>
            <Text weight="semiBold">HOME SCREEN 2</Text>
            <Text>HOME SCREEN</Text>
            <Text>HOME SCREEN</Text>
        </View>
    )
}


export default HomeScreen