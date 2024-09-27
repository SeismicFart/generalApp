import React from "react";
import { View, ImageBackground } from "react-native";

const Background = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("../assets/images/marke.png")}
            style={{ height:'100%' }}>
                {children}
            </ImageBackground>
        </View>
    )
}

export default Background;