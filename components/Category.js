import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CartegoryCard from './CartegoryCard'

const Category = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* CC */}
<CartegoryCard imgUrl='https://links.papareact.com/gn7' title='Testing'/>
<CartegoryCard imgUrl='https://links.papareact.com/gn7' title='Testing2'/>
<CartegoryCard imgUrl='https://links.papareact.com/gn7' title='Testing3'/>
<CartegoryCard imgUrl='https://links.papareact.com/gn7' title='Testing4'/>
<CartegoryCard imgUrl='https://links.papareact.com/gn7' title='Testing5'/>
<CartegoryCard imgUrl='https://links.papareact.com/gn7' title='Testing6'/>




      <Text>Category</Text>
    </ScrollView>
  )
}

export default Category