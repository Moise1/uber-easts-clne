import { View, StyleSheet } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SearchBar = () => {
  return (
    <View style={styles.view}>
     <GooglePlacesAutocomplete 
     query={''}
     styles={{...searchBarStyles}}
     placeholder="Search..."
     renderLeftButton={() =>(
         <View>
             <Ionicons name='location-sharp' size={24}/>
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


