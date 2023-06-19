import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ImageCustom = ({source, style}) => {
  const [loadEroor, setLoadEroor] = useState(false)
  const [loader, setLoader] = useState(false)
  return (
    <Image
     source={!source || loadEroor ? '' : source } 
     style={style} 
     onError={()=>setLoadEroor(true)}
     onLoadStart={()=>setLoader(true)}
     onLoadEnd={()=>setLoader(false)}
     />
  )
}

export default ImageCustom

const styles = StyleSheet.create({})