import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";

import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
const TrendingMovies = ({ data }) => {
  const [snapIndex, setSnapIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderWidth: 1,
        marginBottom: 8,
        backgroundColor: "#000000",
      }}>
      <Text
        style={{
          color: "white",
          fontFamily: FONTS.bold,
          fontSize: 25, // text-xl
          marginLeft: 25,
          marginTop: 50,
          marginBottom: -50,
        }}>
        Trending
      </Text>

      <Carousel
        loop
        style={{
          width: width * 1,
          height: height * 0.6,
          justifyContent: "center",
        }}
        width={width * 0.8}
        height={height * 0.6}
        autoPlay={true}
        data={data}
        mode="parallax"
        parallaxScrollingScale={0.9}
        parallaxScrollingOffset={50}
        scrollAnimationDuration={1000}
        // onSnapToItem={}
        renderItem={({ index }) => <MovieCard navigation={navigation} />}
      />
    </View>
  );
};

export default TrendingMovies;

const MovieCard = ({ focus, item, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("MovieScreen")}>
        <Image
          source={require("../assets/images/LegoNinjagoMoviePoster2.png")}
          style={
            !focus
              ? {
                  width: "80%",
                  height: "80%",
                  borderRadius: 20, // Turns rect to a circle
                }
              : {
                  width: "60%",
                  height: "60%",
                  borderRadius: 20, // Turns rect to a circle
                }
          }
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
