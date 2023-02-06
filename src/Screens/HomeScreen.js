import { Box } from "native-base"
import React from 'react'

import Colors from "../data/color"
import HomeProduct from "../Components/HomeProduct"
import HomeSearch from "../Components/HomeSearch"

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.subMain}>
      <HomeSearch />
      <HomeProduct />
    </Box>
  )
}

export default HomeScreen