import { View, Text, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold, 
        fontSize: titleSize,
        color: COLORS.primary
      }}>{title}</Text>
      <Text style={{
        fontFamily: FONTS.regular, 
        fontSize: subTitleSize,
        color: COLORS.primary
      }}> {subTitle} </Text>
    </View>
  )
}

export const EthPrice = ({price}) => {
  return (
    <View style={{flexDirection: "row", alignItems: "center" }}>
      <Image 
        source={assets.eth} 
        resizeMode="contain"
        style={{width: 20, height: 20, marginRight: 2}}
      />
      <Text style={{fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary
      }}>
      {price}</Text>
    </View>
  )
}

export const ImageCmp = ({imgURL, index}) => {
  return (
    <Image 
      source={imgURL}
      resizeMode="contain"
      style={{
        width:48,
        height:48,
        marginLeft: index === 0 ? 0 : -SIZES.font // We want the images to overlap
      }}
    />
  )
}

export const People = () => {
  return (
    <View style={{flexDirection: "row"}}>
      {[assets.person02, assets.person03, assets.person04]
        .map((imgURL, index) =>
        (<ImageCmp imgURL={imgURL} index={index} key={index} />))
      }
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: "50%"
    }}>
      <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary
        }}>
        Ending in:
      </Text>
      {/* This text automatically on next line */}
      <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary
        }}>
        12h 30m
      </Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={{
      width: "100%",
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge, // Moves it from being below to going up INSIDE card
      flexDirection: "row",
      justifyContent: "space-between"
    }}>
      <People />
      <EndDate />
    </View>
  )
}