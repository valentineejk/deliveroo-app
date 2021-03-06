import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CartegoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="mr-2 relative">
        <Image
        source={{
            uri: imgUrl
        }}
        className="h-20 w-20 rounded"
        />
      <Text className=" bottom-1 left-1 absolute text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CartegoryCard