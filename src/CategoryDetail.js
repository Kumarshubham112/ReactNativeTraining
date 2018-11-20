import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import Card from './Card'

const CategoryDeatil=(props)=>{
    console.log(props)
    return (
      <Card>
        <Text> {props.data.name} </Text>
        <Image resizeMode={'cover'}
            style={{ width: '100%', height: 200 }}
            source={{uri: props.data.category_image}}/>
      </Card>
    )
}
export default CategoryDeatil;