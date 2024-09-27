import React from 'react';
import { StyleSheet, ScrollView, Text, View } from "react-native";

const HorizontalList = () => {
    return (
        <View>
            <Text style={styles.headingText}>Recommended Movies</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>To</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Explode</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardElevated: {
        backgroundColor: '#CAD5E2'
    }

})

export default HorizontalList;
