import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native"
import React from "react"
import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from "../components"

const DetailsHeader = ({data, navigation}) => (
  <View style={{width: "100%", height: 373}}>
    <Image 
      source={data.image} 
      resizeMode="cover"
      style={{width: "100%", height: "100%"}}
    />

    <CircleButton 
      imgURL={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10} // Offset back button
    />

    <CircleButton 
      imgURL={assets.heart}
      handlePress={() => navigation.goBack()}
      right={15}
      top={StatusBar.currentHeight + 10}
    />

  </View>
)

// Since using details in stack.screen in App.js, we get route and navigation by default
const Details = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar 
        barStyle="dark-content" // Color of text n wifi n stuff
        backgroundColor="transparent"
        translucent={true} // Status bar entirely blends into background
      />

      <View style={{
        width:"100%", // Moves button to middle
        position: "absolute", // Makes sure buttom will always be in position
        bottom: 0, // Moves button to bottom of SafeAreaView
        //  paddingVertical == Offset AWAY from set position
        paddingVertical: SIZES.font, // Moves upwards, AWAY from bottom
        justifyContent: "center",
        alignItems:"center", // Changes size of button from full width to middle
        backgroundColor: "rgba(255,255,255,0.5)", // 50% opacity,
        zIndex: 1
      }}>

        <RectButton 
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark }
        />
      </View>

      <FlatList 
        data={data.bids}
        renderItem = {({item}) => <DetailsBid bid={item} /> }
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge*3}}
        ListHeaderComponent={() => ( // React component on top of flatlist
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{padding: SIZES.font}}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                  marginTop: SIZES.extraLarge
                }}>
                  Current Bids
                </Text>
              )}

            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
    )
}

export default Details