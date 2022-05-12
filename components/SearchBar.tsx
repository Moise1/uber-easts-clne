import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { GOOGLE_PLACES_API_KEY } from "@env-vars";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export const SearchBar = () => {
  return (
    <View style={styles.view}>
     <GooglePlacesAutocomplete 
     query={{key: GOOGLE_PLACES_API_KEY}}
     styles={{...searchBarStyles}}
     placeholder="Search..."
     renderLeftButton={() =>(
         <View style={styles.locationIcon}>
             <Ionicons name='location-sharp' size={24}/>
         </View>
     )}
     renderRightButton={() =>(
         <View style={styles.rightSearchSection}>
             <AntDesign name='clockcircle' size={11} style={styles.clockIcon}/>
             <Text>Search</Text>
         </View>
     )}
     />
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 15,
        flexDirection: 'row'
    },
    locationIcon: {
        marginLeft: 10
    },
    rightSearchSection: {
        flexDirection: 'row',
        marginRight: 8,
        backgroundColor: '#fff',
        padding: 9,
        borderRadius: 30,
        alignItems: 'center'
    },
    clockIcon: {
        marginRight: 6
    }

});

const searchBarStyles = StyleSheet.create({
    textInput: {
        backgroundColor: '#eee',
        borderRadius: 20,
        fontWeight: '700',
        marginTop: 7
    },
    textInputContainer: {
        backgroundColor: '#eee',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    }
})


