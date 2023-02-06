import React from 'react'
import { Box, Center, Image, VStack } from 'native-base'
import Colors from '../data/color'
import AppButton from "../Components/AppButton"

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image source={require("../../assets/favicon.png")} alt="logo" size="lg" />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <AppButton bg={Colors.black} color={Colors.white}>REGISTER</AppButton>
        <AppButton bg={Colors.white} color={Colors.black}>LOGIN</AppButton>
      </VStack>
    </Box>
  )
}

export default NotVerifyScreen