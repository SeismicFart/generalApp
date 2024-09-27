import React from "react";
import { View, ScrollView, TouchableHighlight, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, assets } from "../constants";
import { RectButton } from "./Button";

const Profile = ({ data }) => {
    return (
        <View>
            <ScrollView>
                <View style={{padding: 10, width: '100%', backgroundColor: COLORS.primary, height: 150}}>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/marke.png')}
                        style={{width: 30, height: 30}}/>
                    {/* lines for formatting */}
                    <View></View>
                    <View></View>
                    </TouchableOpacity>
                </View>
                {/* plaque cards for stuff */}
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/images/marke.png')} style={{width: 140, height: 140, 
                    borderRadius: 100, marginTop:-70}}/>
                    <Text style={{fontSize: 25, fontWeight: 'bold', padding: 10}}>Mr. Bruh</Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: COLORS.gray}}>From the Bruh Zone</Text>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray,
                    width: '90%',
                    padding: 20,
                    paddingBottom: 22,
                    borderRadius: 10,
                    shadowOpacity: 80,
                    elevation: 15,
                    marginTop: 20
                }}>
                    <Image source={require('../assets/icons/briefcase.png')} style={{ width: 20, height: 20}}/>
                    <Text style={{marginLeft: 10, fontWeight: 'bold'}}>CEO of Swag</Text>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray,
                    width: '90%',
                    padding: 20,
                    paddingBottom: 22,
                    borderRadius: 10,
                    shadowOpacity: 80,
                    elevation: 15,
                    marginTop: 20
                }}>
                    <Image source={require('../assets/icons/location.png')} style={{ width: 25, height: 25 }}/>
                    <Text style={{marginLeft: 10, fontWeight: 'bold'}}>CEO of Swag</Text>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray,
                    width: '90%',
                    padding: 20,
                    paddingBottom: 22,
                    borderRadius: 10,
                    shadowOpacity: 80,
                    elevation: 15,
                    marginTop: 20,
                }}>
                    <Image source={require('../assets/icons/share.png')} style={{ width: 20, height: 20}}/>
                    <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Share</Text>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: COLORS.black,
                    width: '90%',
                    padding: 20,
                    paddingBottom: 22,
                    borderRadius: 10,
                    shadowOpacity: 80,
                    elevation: 15,
                    marginTop: 20,
                    marginBottom: 40
                }}>
                    {/* need to make changes to button fr */}
                    <RectButton/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile;