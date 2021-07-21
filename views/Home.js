import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import mapStyle from '../style'
import Feather from 'react-native-vector-icons/Feather'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import style from '../style'
import data from '../data'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'

import iconMoonConfig from '../assets/selection.json'



const Car = createIconSetFromIcoMoon(iconMoonConfig, 'icomoon', 'icomoon.ttf')









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
                <Marker coordinate={{
                    latitude: 6.439129,
                    longitude: 7.514894,
                }}>
                    <View style={styles.pin}>
                        <Fontisto
                            name='map-marker-alt'
                            size={30}
                            style={{ color: '#02dc9f' }}
                        />
                    </View>
                </Marker>
                <Marker coordinate={{
                    latitude: 6.435707,
                    longitude: 7.514220
                }}
                >
                    <View style={styles.marker}>
                        <IonIcons name="navigate" size={20} />
                    </View>
                </Marker>
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
                <View style={styles.categoryWarraper}>
                    {
                        data.map((data) => {
                            return (
                                <View key={data.id} style={styles.category}>
                                    <Text style={{ color: data.id === '1' ? '#5d5e6b' : '#c1c2c7' }}>{data.name}</Text>
                                    <IonIcons style={{ color: data.id === '1' ? '#5d5e6b' : '#c1c2c7' }} name='car-outline' size={40} />
                                    {/* <Car name={data.icon} size={45} /> */}
                                </View>
                            );
                        })
                    }
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>PickMe Here!</Text>
                </TouchableOpacity>
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
        shadowOpacity: 0.05,
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

    },
    categoryWarraper: {
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'absolute',
        right: 0,
        top: height / 7,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        }, shadowRadius: 20,
        shadowOpacity: 0.1
    },
    category: {
        alignItems: 'center',
        marginBottom: 3,
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 16,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'

    },
    pin: {
        width: 130,
        height: 130,
        borderRadius: 130,
        backgroundColor: 'rgba(2,220,159,.25)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    marker: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center'

    }


})