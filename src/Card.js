import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Card =(props)=>{
    return (
      <View style={styles.ContainerStyle}>
        {props.children}
      </View>
    )
  }

  const styles={
      ContainerStyle:{
          borderWidth:1,
          borderRadius:2,
          borderColor:'#ddd',
          borderBottomWidth: 0
      }
  }
export default Card;