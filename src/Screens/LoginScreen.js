import { Box, Image, Heading, VStack, Input, Button, Text, Pressable } from "native-base"
import React from 'react'
import Colors from "../data/color"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"

const LoginScreen = () => {
  return (
    <Box flex={1} bg={Colors.main}>
      <Image flex={1} alt="logo" resizeMode="cover" size="lg" w="full" source={require("../../assets/background.jpg")} />
      <Box w="full" h="full" position="absolute" top="0" px="6" justifyContent="center">
        <Heading color={Colors.white}>Login</Heading>
        <VStack space={8} pt="6">
          <Input InputLeftElement={<MaterialIcons name="email" size={20} color={Colors.white} />} variant="underlined" placeholder="user@gmail.com" w="70%" color={Colors.white} pl={2} borderBottomColor={Colors.underline} />
          {/* PASSWORD */}
          <Input InputLeftElement={<Ionicons name="eye" size={20} color={Colors.white} />} variant="underlined" placeholder="********" w="70%" type="password" color={Colors.white} pl={2} borderBottomColor={Colors.underline} />
        </VStack>
        <Button
          _pressed={{ bg: Colors.white }}
          _text={{ color: Colors.main }}
          my={30}
          w="40%"
          rounded={50} bg={Colors.white}
        >
          LOGIN
        </Button>
        <Pressable mt={4}>
          <Text color={Colors.white}>
            SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  )
}

export default LoginScreen