import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { About } from './About'
import { MenuItems } from './MenuItems'

interface Props{
  route: any
}

export const RestoDetail = ({route}: Props) => {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical: 20}}/>
      <MenuItems/>
    </View>
  )
}


const styles = StyleSheet.create({})