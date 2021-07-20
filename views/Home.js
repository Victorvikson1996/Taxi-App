import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import mapStyle from '../style'
import Feather from 'react-native-vector-icons/Feather'
import style from '../style'











const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <MapView
                provider="google"
                style={StyleSheet.absoluteFillObject}
                initialRegion={{
                    latitude: 6.437601,
                    longitude: 7.514509,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01 * ASPECT_RATIO
                }}
                customMapStyle={mapStyle}
            >

            </MapView>
            <View>
                <SafeAreaView style={styles.container}>
                    <View>
                        <Feather name='menu' size={24} />
                    </View>
                    <TouchableOpacity style={styles.search}>
                        <View style={styles.inputWrapper}>
                            <View style={styles.greenDot} />
                            <View>
                                <Text style={styles.inputText}>Your PickUp Location?</Text>
                            </View>
                        </View>
                        <View>
                            <Feather name="heart" size={20} style={{ color: '#97989f' }} />
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20
    },
    search: {
        marginHorizontal: 20,
        padding: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 6,
        shadowOpacity: 0.85,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    greenDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#0ddda2',
        marginRight: 10

    },

    inputText: {
        fontWeight: '600',
        color: '#8b8d96'

    }


})