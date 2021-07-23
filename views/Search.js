import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Button, StyleSheet, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import data2 from '../data2'
import data3 from '../data3'

export default function Search({ navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.card}>
                    <View style={styles.drop}>
                        <Text style={styles.dropText}>Drop Locations</Text>
                        <TouchableOpacity>
                            <Feather name='x' size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.search}>
                        <View style={styles.inputWrapper}>
                            <View style={styles.pinkDot} />
                            <GooglePlacesAutocomplete
                                placeholder="Where are you going?"
                                onPress={(data, details = null) => {
                                    // 'details' is provided when fetchDetails = true
                                    console.log(data, details);
                                    navigation.navigate('Home', { viewport: details.geometry.viewport });
                                }}
                                fetchDetails
                                // styles={{
                                //     textInput: styles.inputWrapper2
                                // }}
                                query={{
                                    key: 'AIzaSyB1jb5w - yq7NkOSDBmWUAFbd - YnBIsL71E',
                                    language: 'en',
                                    types: '(cities)',
                                }}
                                suppressDefaultStyles

                            />
                            {/* <TextInput placeholder="Where are you going?" placeholderTextColor='#afb1b6' /> */}
                        </View>
                        <View>
                            <Feather name='heart' size={20} />
                        </View>
                    </View>
                    <View style={styles.bottomCard}>
                        <View style={styles.bottomCardPin}>
                            <Fontisto name="map-marker-alt" size={20} style={styles.bottomCardIcon} />
                            <Text style={styles.bottomCardText}>Tap to select from the map</Text>
                        </View>
                        <TouchableOpacity style={styles.bottomCircle}>
                            <Feather onPress={() => navigation.navigate('Home')} name='arrow-right' size={20} style={{ color: '#fff' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <View>
                <Text>Favourite Place</Text>
                <View>
                    {data2.map(data => {
                        return (
                            <View key={data.id}>
                                <View>
                                    <Fontisto name='heart' size={18} />
                                </View>
                                <Text>{data.title}</Text>
                                <Text>{data.subtitle}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    card: {
        padding: 20,
        marginHorizontal: 10,
        borderColor: '#efefef',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 30

    },

    drop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    dropText: {
        fontWeight: 'bold',
        color: '#ff5563'
    },
    search: {
        marginVertical: 15,
        padding: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#efeff0',
        borderWidth: 2
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pinkDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#ff4858',
        marginRight: 10,
    },
    bottomCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    bottomCardPin: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    bottomCardIcon: {
        color: '#ff4858',
        marginRight: 10,
    },
    bottomCardText: {
        color: '#f9293b',
        fontWeight: '500',
        fontSize: 16,
    },
    bottomCircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },

    inputText: {
        fontWeight: '600',
        color: '#8b8d96'

    },
    textInput: {
        fontSize: 20,
        marginBottom: 20,
    },

})