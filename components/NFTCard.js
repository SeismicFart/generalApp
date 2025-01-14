import React from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {COLORS, SIZES, SHADOWS, assets} from '../constants'
import { CircleButton, RectButton } from './Button'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'

const NFTCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
    {/* Create extra space in the card above text */}
      <View style = {{width: "100%", height: 250}}>
        <Image 
          source={data.image}
          resizeMode='cover'
          // Adding style makes the image visible
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgURL={assets.heart} right={10} top={10} />

      </View>

      <SubInfo />

      <View style={{width: "100%", padding: SIZES.font}}>
        <NFTTitle 
          title={data.name}
          subTitle = {data.creator}
          titleSize = {SIZES.large}
          subTitleSize = {SIZES.small}
        />

        <View style={{
          marinTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", {data})}
           />
        </View>
      </View>

    </View>
  )
}

export default NFTCard;