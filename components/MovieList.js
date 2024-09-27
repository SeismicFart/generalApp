import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import { moviesData } from "../constants";
import { useNavigation } from "@react-navigation/native";
// import {
//   fallbackMoviePoster,
//   image185,
//   image342,
//   poster342,
// } from "../api/moviedb";
import { styles } from "../theme";
const { width, height } = Dimensions.get("window");
import { SIZES } from "../constants";

export default function MovieList({ title, data }) {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("MovieScreen", item);
  };

  return (
    <View
      // className="mb-8 space-y-4"
      style={{
        marginBottom: 8,
        marginVertical: 4,
        backgroundColor: "black",
      }}>
      <View
        // className="mx-4 flex-row justify-between items-center"
        style={{
          marginHorizontal: 4,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}>
        <Text
          // className="text-white text-lg"
          style={{
            color: "white",
            fontSize: 20,
          }}>
          {title}
        </Text>
        {/* {!hideSeeAll && ( */}
        {/* <TouchableOpacity>
          <Text
            style={[styles.text, { fontSize: 17 }]}
            // className="text-lg"
          >
            See All
          </Text>
        </TouchableOpacity> */}
        {/* )} */}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate("MovieScreen", item)}>
              <View className="space-y-1 mr-4">
                <Image
                  source={require("../assets/images/LegoNinjagoMoviePoster.jpg")}
                  // source={{
                  //   uri: image185(item.poster_path) || fallbackMoviePoster,
                  // }}
                  // className="rounded-3xl"
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 20,
                  }}
                />
                <Text
                  // className="text-neutral-300 ml-1"
                  style={{
                    color: "white",
                    alignItems: "center",
                  }}>
                  {title.length > 14 ? title.slice(0, 14) + "..." : title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
