import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { About } from './About'


export const RestoDetail = () => {
  return (
    <View>
      <About/>
      <Divider width={1.8} style={{marginVertical: 20}}/>
    </View>
  )
}


const styles = StyleSheet.create({})