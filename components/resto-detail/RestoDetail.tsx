import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { About } from './About'
import { MenuItems } from './MenuItems'
import { ViewCart } from './ViewCart'

interface Props{
  route: any
  navigation: any
}

export const RestoDetail = ({route, navigation}: Props) => {
  const {name} = route;
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical: 20}}/>
      <MenuItems/>
      <ViewCart 
      navigation={navigation}
      restoName={name}
      />
    </View>
  )
}


const styles = StyleSheet.create({})