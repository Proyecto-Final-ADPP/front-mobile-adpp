import React, { useState } from "react";
import { Box, Heading, Stack } from "native-base";
import { Icon, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Center,
  NativeBaseProvider,
  VStack,
  Input,
  Button
} from "native-base";

const Example = () => {
  const [show, setShow] = useState(false);

  return (
    <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
        <Stack p="4" space={3}>
          <VStack space={1} alignItems="center">
            <Heading size="lg">
              Inicio de Sesión
            </Heading>
          </VStack>
          { /* INICIO: FORMULARIO */}
          <Stack space={4} w="100%" maxW="100%" mx="auto" alignItems="center">
            <Input
              w={{
                //base: "75%",
                md: "25%"
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="DNI"
            />
            <Input
              w={{
                //base: "75%",
                md: "25%"
              }}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>
              }
              placeholder="Contraseña"
            />
          </Stack>
          { /* FIN: FORMULARIO */}
          <Box alignItems="center">
            <Button onPress={() => console.log("hello world")}>Ingresar</Button>
          </Box>
          
        </Stack>
      </Box>
    </Box>
  )
};

export default function App() {
  return (
    <NativeBaseProvider>
      <Center px={4} flex={1}>
        <VStack space={5} alignItems="center">
          <Example />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}